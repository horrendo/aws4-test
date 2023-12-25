import { aws4Interceptor } from "aws4-axios";
import axios from "axios";

const interceptor = aws4Interceptor({ options: { service: "rds" } });
axios.interceptors.request.use(interceptor);
