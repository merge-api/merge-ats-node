import { CandidatesApi, HttpBearerAuth } from "./api";

const apiInstance = new CandidatesApi();

const auth = new HttpBearerAuth();

auth.accessToken = "gCTNlqHbmF3z2mGRh92StFH2mtOwF50mtvvs4aX-0ntwI_AbGtrB1g";

apiInstance.setDefaultAuthentication(auth);

const getCandidates = async (xAccountToken) => {
  const response = await apiInstance.candidatesList(xAccountToken);
  console.log(response.body);
}

getCandidates("vqvmQO540ZTTomLKIDyzfX90ZDOhHnPnmrhjK0Fn3DAJJyInzHkmkw");