import React, { Component } from "react";
import { View, Text } from "react-native";
import { Toolbar, ThemeProvider } from "react-native-material-ui/src";
class Temp extends Component {
  render() {
    const uiTheme = {
      toolbar: {
        container: {
          height: 56,
          backgroundColor: "#4caf50"
        }
      }
    };
    return (
      <View style={{ flex: 1 }}>
        <ThemeProvider uiTheme={uiTheme}>
          <Toolbar
            centerElement="Searchable"
            searchable={{
              autoFocus: true,
              placeholder: "Search",
              onChangeText: text => this.filterContent(text)
            }}
          />
        </ThemeProvider>
      </View>
    );
  }

  filterContent(text) {
    console.log(text);
  }
}

export default Temp;
