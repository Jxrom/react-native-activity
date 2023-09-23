import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { PieChart, BarChart, LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const data = [
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

const barChartData = {
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

const lineChartData = {
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
const formatYLabel = (value) => {
  return Math.round(value); // Round to the nearest integer
};

export default function App() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Function to update the current date
    const updateCurrentDate = () => {
      const now = new Date();
      const formattedDate = now.toDateString(); // Format the date as a string
      setCurrentDate(formattedDate);
    };

    // Initial call to update the current date
    updateCurrentDate();

    // Set up an interval to update the date every minute (you can adjust this interval)
    const intervalId = setInterval(updateCurrentDate, 60000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View>
        <Text style={styles.date}>{currentDate}</Text>{" "}
      </View>
      {/* Display the current date */}
      <PieChart
        data={data}
        width={screenWidth}
        height={170}
        chartConfig={{
          backgroundGradientFrom: "black",
          backgroundGradientTo: "black",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <View style={styles.chartTitles}>
        <Text style={styles.barChartTitle}>Week</Text>
        <BarChart
          data={barChartData}
          width={screenWidth - 10}
          height={170}
          yAxisSuffix="" // Remove the percentage symbol
          yAxisLabel={""} // Remove the yAxis label
          chartConfig={{
            backgroundGradientFrom: "black",
            backgroundGradientTo: "black",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          formatYLabel={formatYLabel} // Apply the custom formatting
        />
        <Text style={styles.lineChartTitle}>Month</Text>
        <LineChart
          data={lineChartData}
          width={screenWidth}
          height={170}
          yAxisSuffix="" // Remove the percentage symbol
          yAxisLabel={""} // Remove the yAxis label
          chartConfig={{
            backgroundGradientFrom: "black",
            backgroundGradientTo: "black",
            color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
          }}
          formatYLabel={formatYLabel} // Apply the custom formatting
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black", // Set the background color to black
  },
  title: {
    fontSize: 24,
    margin: 10,
    fontWeight: "bold",
    color: "white", // Set the font color to white
  },
  date: {
    fontSize: 16,
    marginBottom: 10,
    color: "white", // Set the font color to white
  },
  barChartTitle: {
    fontSize: 24,
    margin: 10,
    marginLeft: 10,
    fontWeight: "bold",
    color: "white", // Set the font color to white
  },
  lineChartTitle: {
    fontSize: 24,
    margin: 10,
    marginLeft: 10,
    fontWeight: "bold",
    color: "white", // Set the font color to white
  },
});
