import { Drash } from "https://deno.land/x/drash@v1.0.0/mod.ts";

export default class Charts extends Drash.Http.Resource {
  static paths = [
    "/allCharts/",
  ];

  public GET() {
    return this.getChartData();
  }

  protected getChartData() {
    try {
      let fileContent = this.readFileContents("./data.json");

      this.response.body = fileContent;
      return this.response;
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        "data not found",
      );
    }
  }

  protected readFileContents(file: string) {
    let fileContentsRaw = Deno.readFileSync(file);
    const decoder = new TextDecoder();
    let decoded = decoder.decode(fileContentsRaw);
    return JSON.parse(decoded);
  }
}
