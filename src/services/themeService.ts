import { ENDPOINT } from "../constants/Endpoints";
import { GetStudentThemeResponse } from "../interfaces";
import axiosInstace from "./axios";

export const getAllThemes = async () => {
  const { data } = await axiosInstace.get<GetStudentThemeResponse>(
    `/${ENDPOINT.GET_STUDENT_THEMES}`
  );

  return data;
};
