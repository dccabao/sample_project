import * as React from 'react';
import {View, Text} from 'react-native';

export default function List({data = []}) {
  return (
    <View>
      {data.map((item, i) => {
        return (
          <View key={i}>
            <Text>{item}</Text>
          </View>
        );
      })}
    </View>
  );
}
