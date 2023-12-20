import { app } from './app.js'
import dotenv from 'dotenv'
import cloudinary from 'cloudinary'
import { connectDatabase } from './config/database.js'
import cors from 'cors';
app.use(cors());

dotenv.config({ path: 'backend/config/config.env' })
connectDatabase()
cloudinary.v2.config({
    cloud_name: "dax2jh2n7",
    api_key: "946856762185418",
    api_secret: "Uavjy_dFtmrWl5a0-cesZN37N1Q",
})
const port = 4000
app.listen(port, () => {
    console.log(`Server is running on port :  ${port}`)
})
