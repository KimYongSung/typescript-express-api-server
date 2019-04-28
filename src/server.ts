import app from './application';

const port = process.env.port || 3030;

/**
 * Start Express server.
 */
const server = app.listen(port, () => {
   console.log(
     "  App is running at http://localhost:%d in %s mode",
     port,
     app.get("env")
   );
   console.log("  Press CTRL-C to stop\n");
 });
 
 export default server;