import icons from "@/constants/icons";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { Link, useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User registered:", user);
      alert(
        "User registered successfully, please check your email for verification"
      );
      router.push("/");
    } catch (error: any) {
      console.error("Error registering:", error);
      alert("Register failed failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View className="p-10 bg-white items-center justify-center h-full rounded-t-[40px] flex flex-col-1 gap-6 ">
      <Text className="mt-2 text-3xl text-center font-rubik-bold text-black-300">
        Welcome!
      </Text>
      <View className="flex flex-col w-full gap-2 text-start">
        <Text className="text-base text-start font-rubik text-black-300">
          Email
        </Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="example@mail.com"
          className="px-6 py-4 border border-b focus:border-primary-300 border-black-100 rounded-xl"
        ></TextInput>
      </View>
      <View className="flex flex-col w-full gap-2 text-start">
        <Text className="text-base text-start font-rubik text-black-300">
          Password
        </Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Input Password"
          className="px-6 py-4 border border-b focus:border-primary-300 border-black-100 rounded-xl"
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={signUp}
        className="w-full py-4 mt-8 rounded-full shadow-md bg-primary-300 shadow-zinc-300"
      >
        <Text className="text-lg text-center text-white font-rubik ">
          {loading ? "Loading..." : "Sign Up"}
        </Text>
      </TouchableOpacity>

      {/* Divider */}
      <View className="flex flex-row items-center justify-center my-4">
        <View className="h-[1px] bg-gray-200 flex-1" />
        <Text className="px-3 text-gray-400">or</Text>
        <View className="h-[1px] bg-gray-200 flex-1" />
      </View>

      <TouchableOpacity
        onPress={() => {}}
        className="w-full py-4 bg-white rounded-full shadow-md shadow-zinc-300"
      >
        <View className="flex flex-row items-center justify-center">
          <Image
            source={icons.google}
            className="w-5 h-5"
            resizeMode="contain"
          />
          <Text className="ml-2 text-lg font-rubik-medium text-black-300">
            Continue with Google
          </Text>
        </View>
      </TouchableOpacity>

      <Text className="mt-4 text-base text-center font-rubik text-black-300">
        Dont have Account?{" "}
        <Link href={"/sign-in"} className="font-bold text-primary-300">
          Sign In
        </Link>
      </Text>
    </View>
  );
};

export default SignUp;
