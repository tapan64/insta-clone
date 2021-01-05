import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";

function PostModal({ navigation, mod }) {
  const [modal, setModal] = useState(mod);
  return (
    <Modal visible={modal}>
      <Text>jflkds jklfd</Text>
      <Text>jflkds jklfd</Text>
      <Text>jflkds jklfd</Text>
      <Text>jflkds jklfd</Text>
      <Text>jflkds jklfd</Text>
      <Button
        title="close"
        onPress={() => {
          setModal(false);
          navigation.goBack();
        }}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  view: {},
});

export default PostModal;
