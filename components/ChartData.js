export const chartData = [
  {
    name: "School Expenses",
    population: 45,
    color: "#00A8CC", // Marine blue color
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Food",
    population: 28,
    color: "#00C3A0", // Marine blue color
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Savings",
    population: 80,
    color: "#00E5E2", // Marine blue color
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Transportation",
    population: 99,
    color: "#02F2D2", // Marine blue color
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Other",
    population: 20,
    color: "#0077B6", // Marine blue color
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

export const barChartData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 30],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
};

export const lineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
};

// Function to format Y-axis labels as integers
export const formatYLabel = (value) => {
  return Math.round(value); // Round to the nearest integer
};
