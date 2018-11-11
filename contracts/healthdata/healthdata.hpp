#include <eosiolib/eosio.hpp>
#include <vector>
#include <algorithm>
#include <eosiolib/time.hpp>

using namespace eosio;

CONTRACT healthdata : public eosio::contract {
  public:
      using contract::contract;
      healthdata( name receiver, name code, datastream<const char*> ds )
        : contract(receiver, code, ds), 
        _employees(receiver, receiver.value),
        _employers(receiver, receiver.value),
        _providers(receiver, receiver.value),
        _healthscores(receiver, receiver.value),
        _datarequests(receiver, receiver.value)
      {

      }

      ACTION regemployer( name employer );
      ACTION regprovider( name provider );

      ACTION addemployee( name employee, name employer );

      ACTION approveprd( name employer, name provider );
      ACTION trustprd( name employee, name provider );

      ACTION createreq( name employee, name provider );
      ACTION setscore( uint64_t id, uint16_t score );

      ACTION requestdata( name requestor, name employee );
      ACTION approvereq( uint64_t id );
      ACTION denyreq( uint64_t id );

      void setreqstatus( uint64_t id, uint16_t status );

      TABLE employee {
        name employee;
        name employer;
        std::vector<name> trusted_providers;
        
        uint64_t primary_key()const { return employee.value; }
      };

      typedef eosio::multi_index<name("employees"), employee> EmployeesTable;
      EmployeesTable _employees;

      TABLE employer {
        name employer;
        std::vector<name> approved_providers;
        
        uint64_t primary_key()const { return employer.value; } 
      };

      typedef eosio::multi_index<name("employers"), employer> EmployersTable;
      EmployersTable _employers;

      TABLE provider {
        name provider;

        uint64_t primary_key()const { return provider.value; }
      };

      typedef eosio::multi_index<name("providers"), provider> ProvidersTable;
      ProvidersTable _providers;

      TABLE healthscore {
        uint64_t id;
        name employee;
        uint16_t status;
        name provider;
        uint32_t timestamp;
        uint16_t score;

        uint64_t primary_key()const { return id; }
      };

      typedef eosio::multi_index<name("healthscores"), healthscore> HealthscoresTable;
      HealthscoresTable _healthscores;

      TABLE datarequest {
        uint64_t id;
        name employee;
        name requestor;
        uint16_t status;
        uint32_t timestamp;

        uint64_t primary_key()const { return id; }
      };

      typedef eosio::multi_index<name("datarequests"), datarequest> DatarequestTable;
      DatarequestTable _datarequests;
};
