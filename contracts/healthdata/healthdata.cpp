#include "healthdata.hpp"
using namespace eosio;

      ACTION healthdata::regemployer( name employer ) {
          require_auth( employer );
          auto iter = _employers.find( employer.value );
          eosio_assert( iter == _employers.end(), "Employer already registered" );
          _employers.emplace( _self, [&](auto& e ) {
            e.employer = employer;
          });
      }

      ACTION healthdata::regprovider( name provider ) {
          require_auth( provider );
          auto iter = _providers.find( provider.value );
          eosio_assert( iter == _providers.end(), "Providers already registered" );
          _providers.emplace( _self, [&](auto& p ) {
            p.provider = provider;
          });
      }

      ACTION healthdata::addemployee( name employee, name employer ) {
          require_auth( employer );
          auto iter = _employees.find( employee.value );
          eosio_assert( iter == _employees.end(), "Employee already exists" );
          _employees.emplace( _self, [&](auto& e ) {
            e.employee = employee;
            e.employer = employer;
          });
      }

      ACTION healthdata::approveprd( name employer, name provider ) {
          require_auth(employer);
          auto iter = _employers.find(employer.value);
          eosio_assert( iter != _employers.end(), "Employer is not registered" );
          healthdata::employer e = *iter;
          std::vector<name> providers = e.approved_providers;
          eosio_assert( std::find( providers.begin(), providers.end(), provider ) == providers.end(), "Provider already approved" );
          providers.push_back( provider );
          _employers.modify( iter, _self, [&](auto& e ) {
            e.approved_providers = providers;
          }); 
      }

      ACTION healthdata::trustprd( name employee, name provider ) {
          require_auth( employee );
          auto iter = _employees.find( employee.value );
          eosio_assert( iter != _employees.end(), "Employee is not registered" );
          healthdata::employee e = *iter;
          std::vector<name> providers = e.trusted_providers;
          eosio_assert( std::find(providers.begin(), providers.end(), provider) != providers.end(), "Provider already trusted" );
          providers.push_back( provider );
          _employees.modify( iter, _self, [&](auto& e ) {
            e.trusted_providers = providers;
          }); 
      }

      ACTION healthdata::createreq( name employee, name provider ) {
          require_auth( employee );
          auto iter = _employees.find( employee.value );
          eosio_assert( iter != _employees.end(), "Employee does not exist" );
          healthdata::employee emp = *iter;
          auto emp_iter = _employers.find( emp.employer.value );
          eosio_assert( emp_iter != _employers.end(), "Employee's employer does not exist" );
          healthdata::employer emplr = *emp_iter;
          std::vector<name> providers = emplr.approved_providers;
          eosio_assert( std::find( providers.begin(), providers.end(), provider ) != providers.end(), "Provider not approved by employer" );
          _healthscores.emplace( _self, [&](auto& h ) {
            h.id = _healthscores.available_primary_key();
            h.employee = employee;
            h.status = 0;
            h.provider = provider;
          });
      }

      ACTION healthdata::setscore( uint64_t id, uint16_t score ) {
          auto iter = _healthscores.find( id );
          eosio_assert( iter != _healthscores.end(), "Healthscore id does not exist" );
          healthscore hs = *iter;
          eosio_assert( hs.status == 0, "Score already set" ); 
          require_auth( hs.provider );
          _healthscores.modify( iter, _self, [&](auto& h ) {
            h.score = score;
            h.status = 1;
            h.timestamp = now();
          });
      }

      ACTION healthdata::requestdata( name requestor, name employee ) {
          require_auth( requestor );
          _datarequests.emplace( _self, [&](auto& d ) {
            d.id = _datarequests.available_primary_key();
            d.employee = employee;
            d.requestor = requestor;
            d.status = 0;
          });
      }

      ACTION healthdata::approvereq( uint64_t id ) {
          healthdata::setreqstatus( id, 1 );
      }

      ACTION healthdata::denyreq( uint64_t id ) {
          healthdata::setreqstatus( id, 2 );
      } 

      void healthdata::setreqstatus( uint64_t id, uint16_t status ) {
          auto iter = _datarequests.find( id );
          eosio_assert( iter != _datarequests.end(), "Request id does not exist" );
          datarequest dr = *iter;
          eosio_assert( dr.status == 0, "Score already set" ); 
          require_auth( dr.employee );
          _datarequests.modify( iter, _self, [&](auto& d ) {
            d.status = status;
            d.timestamp = now();
          }); 
      }

EOSIO_DISPATCH( healthdata, (regemployer)(regprovider)(addemployee)(approveprd)(trustprd)(createreq)(setscore)(requestdata)(approvereq)(denyreq) )
