import { provideHttpClient, withFetch, withInterceptorsFromDi } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutes } from "./app.routes";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutes,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
