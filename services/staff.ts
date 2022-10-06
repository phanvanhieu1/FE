import axios from "axios";

export const getStaff = async (ctx: any) => {
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3000/api/`,
      headers: ctx?.req?.headers?.cookie ? { cookie: ctx.req.headers.cookie } : undefined,
      withCredentials: true,
    })
    return { data: response.data }
  } catch (error) {
    return { error: error }
  }
}