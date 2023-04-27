import { Amplify } from "aws-amplify";

import { Authenticator, Flex, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "../../src/aws-exports";
Amplify.configure(awsExports);

export default function App() {
  return (
    // <View height="100vh" width="100vw">
    <Flex
      justifyContent="center"
      backgroundColor="rgba(121,122,233)"
      height="100vh"
    >
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user?.attributes?.email}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </Flex>
    // </View>
  );
}
