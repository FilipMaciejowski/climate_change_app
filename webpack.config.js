 export default {
   module: {
     rules: [
       {
         test: /\.less$/,
         use: [
           "style-loader",
           {
             loader: "css-loader",
             options: { sourceMap: 1 }
           },
           "less-loader"
         ]
       }
     ]
   }
 };

 