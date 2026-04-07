import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import { themes } from "../../utils/theme";

export default function Settings() {
  const { tema, setTema } = useContext(ThemeContext);
  const theme = themes[tema];

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: theme.text }}>
        Tema: {tema}
      </Text>

      <TouchableOpacity
        style={{ backgroundColor: theme.button, padding: 15, marginTop: 20 }}
        onPress={() => setTema(tema === "light" ? "dark" : "light")}
      >
        <Text style={{ color: "#fff" }}>Trocar Tema</Text>
      </TouchableOpacity>
    </View>
  );
}