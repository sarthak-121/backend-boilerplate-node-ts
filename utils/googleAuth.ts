import axios from "axios";

const verifyGoogleToken = async (token: string) => {
  try {
    const tokenResponse = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`
    );

    console.log(">>>>>>>>>>>>>>>>>", tokenResponse.data);
  } catch (e: any) {
    console.log("Erro", e);
  }
};

export default verifyGoogleToken;
