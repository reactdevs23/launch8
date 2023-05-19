import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "./Chart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const MyDonutChart = () => {
  const data = {
    labels: ["Presale", "Liquidity", "Fess", "Locked", "Burnt", "Unlocked"],
    datasets: [
      {
        label: " value",
        data: ["25.00", "15.00", "20.00", "10.00", "20.00", "5.00"],
        backgroundColor: [
          "#5BC7E6",
          "#51546F",
          "#9F00AD",
          "#7963CD",
          "#EE0B0B",
          "#63CD81",
          "#FF8F78",
        ],
        hoverOffset: 4,
        borderWidth: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "60%",
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 20,
        },
      },
      title: {
        display: true,
        text: "Donut Chart",
      },

      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        titleFont: {
          size: 16,
          weight: "bold",
        },
        bodyFont: {
          size: 14,
          paddingLeft: 10,
        },
      },
    },
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.chartContainer}>
          <div className={styles.textContainer}>
            <p className={styles.title}>Total</p>
            <p className={styles.value}>100B</p>
          </div>{" "}
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default MyDonutChart;
