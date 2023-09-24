import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, TouchableOpacity, Image } from "react-native";
import { PieChart, BarChart, LineChart } from "react-native-chart-kit";
import {
  chartData,
  barChartData,
  lineChartData,
  formatYLabel,
} from "./components/ChartData";
import { styles } from "./components/style";
// Import your PNG images here
import mapIcon from "./icons/navigation.png";
import searchIcon from "./icons/search.png";
import dashboardIcon from "./icons/layout.png";
import userIcon from "./icons/user.png";

const screenWidth = Dimensions.get("window").width;

export default function App() {
  const [currentDate, setCurrentDate] = useState("");
  const [selectedButton, setSelectedButton] = useState("Button 1");

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

  const handleButtonPress = (buttonText) => {
    // Handle button press here
    console.log(`Button pressed: ${buttonText}`);
    setSelectedButton(buttonText); // Update the selected button state
  };

  // Function to render the button icon based on the selected button
  const renderButtonIcon = (buttonText) => {
    switch (buttonText) {
      case "Button 1":
        return <Image source={mapIcon} style={styles.buttonIcon} />;
      case "Button 2":
        return <Image source={searchIcon} style={styles.buttonIcon} />;
      case "Button 3":
        return <Image source={dashboardIcon} style={styles.buttonIcon} />;
      case "Button 4":
        return <Image source={userIcon} style={styles.buttonIcon} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View>
        <Text style={styles.date}>{currentDate}</Text>
      </View>
      {/* Display the current date */}
      <PieChart
        data={chartData}
        width={350}
        height={160}
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

      <View>
        <Text style={styles.chartDateTitle}>Week</Text>
        <BarChart
          data={barChartData}
          width={360}
          height={160}
          yAxisSuffix="%" // Remove the percentage symbol
          chartConfig={{
            backgroundGradientFrom: "black",
            backgroundGradientTo: "black",
            color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // optional
            strokeWidth: 2, // optional
          }}
          formatYLabel={formatYLabel} // Apply the custom formatting
          showValuesOnTopOfBars={true}
        />
        <Text style={styles.chartDateTitle}>Month</Text>
        <LineChart
          data={lineChartData}
          width={360}
          height={160}
          yAxisSuffix="%" // Remove the percentage symbol
          chartConfig={{
            backgroundGradientFrom: "black",
            backgroundGradientTo: "black",
            color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
          }}
          formatYLabel={formatYLabel} // Apply the custom formatting
          bezier
        />
      </View>
      {/* Add buttons below the LineChart */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "Button 1" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("Button 1")}
        >
          {renderButtonIcon("Button 1")}
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "Button 2" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("Button 2")}
        >
          {renderButtonIcon("Button 2")}
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "Button 3" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("Button 3")}
        >
          {renderButtonIcon("Button 3")}
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "Button 4" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("Button 4")}
        >
          {renderButtonIcon("Button 4")}
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
