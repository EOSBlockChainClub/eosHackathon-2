
<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Average Wellness Score',
          // fillColor: ["orange","red", "red", "orange", "yellow", "yellow","lightgreen", "lightgreen","lightgreen", "lightgreen", "green", "green"],
          backgroundColor: ["yellow","orange", "red", "orange", "yellow", "yellow","lightgreen", "lightgreen","lightgreen", "lightgreen", "green", "green"],
          data: [43, 32, 19, 29, 45, 60, 65, 66, 70, 75, 80, 85]
        }
      ]
    })
  }
}
</script>
