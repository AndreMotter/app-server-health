import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";


export function GraficoTemperatura({ leituras }: { leituras: any[] }) {

  if (!leituras || leituras.length === 0) {
    return;
  }

  const leituras_temperatura = leituras.filter(l => l.unidade === "C");

  const labels = leituras_temperatura.map(l => new Date(l.datahora).getHours() + "h");
  const valores = leituras_temperatura.map(l => parseFloat(l.valor));

  return (
    <View>
      <Text style={{ fontSize: 14, textAlign: "center" }}>
        Variação Temperatura (°C)
      </Text>

      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: valores
            }
          ]
        }}
        width={Dimensions.get("window").width - 20}
        height={100}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(46, 125, 50, ${opacity})`,
          labelColor: () => "#333",
          propsForDots: {
            r: "3",
            strokeWidth: "1",
            stroke: "#2E7D32"
          }
        }}
        bezier
        style={{
          margin: 20,
        }}
      />
    </View>
  );
}
