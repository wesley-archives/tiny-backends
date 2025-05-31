export class Server {
  public static environment: string = process.env.NODE_ENV || "development";
  public static port: number = parseInt(process.env.PORT || "3000");
}
