import { injectable } from "inversify";
import ServiceProvider from "varie/lib/support/ServiceProvider";
import DocumentationService from "@app/services/DocumentationService";
import { DocumentationServiceInterface } from "@app/contracts/DocumentationServiceInterface";

/*
|--------------------------------------------------------------------------
| App Service Provider
|--------------------------------------------------------------------------
| You can bind various items to the app here, or can create other
| custom providers that bind the container
|
*/
@injectable()
export default class DocumentationProvider extends ServiceProvider {
  public register() {
    this.app.singleton("$documentationService", DocumentationService);
  }
}
