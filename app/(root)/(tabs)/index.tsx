import icons from "@/constants/icons";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { Text } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { onAuthStateChanged, User } from "firebase/auth";
import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  onAuthStateChanged(FIREBASE_AUTH, (user) => {
    setUser(user);
    console.log("user", user);
  });

  const handleLogout = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      router.push("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="flex items-center justify-center mt-40 min-h-44">
      <View className="flex flex-col items-center w-4/6 gap-4 p-6 border rounded-xl">
        <Image
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
          className="rounded-full size-20"
        />
        <Text>{user?.email}</Text>

        <TouchableOpacity
          onPress={handleLogout}
          className="flex flex-row items-center justify-between p-3 border border-red-500 rounded-full"
        >
          <View className="flex flex-row items-center gap-3">
            <Image source={icons.logout} className="size-6" />
            <Text className="text-lg text-red-500 font-rubik-medium">
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
