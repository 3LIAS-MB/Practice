import app from "./app.js";
import { PORT } from "./confing.js";

app.listen(PORT);
console.log(`Server on port http://localhost:${PORT}`);
