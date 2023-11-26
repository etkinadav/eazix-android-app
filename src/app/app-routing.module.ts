import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { MainSectionComponent } from "./main-section/main-section.component"
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
    { path: "", component: MainSectionComponent },
    { path: "list", component: PostListComponent },
    { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
    { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
    { path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }

//  =========================================================== NEW?

// import { NgModule } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";
// import { PostListComponent } from "./posts/post-list/post-list.component";
// import { MainSectionComponent } from "./main-section/main-section.component"
// import { PostCreateComponent } from "./posts/post-create/post-create.component";
// import { AuthGuard } from "./auth/auth.guard";
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClient } from "@angular/common/http";

// const routes: Routes = [
//     { path: "", component: MainSectionComponent },
//     { path: "list", component: PostListComponent },
//     { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
//     { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
//     { path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
// ];

// @NgModule({
//     imports: [RouterModule.forRoot(routes),
//     TranslateModule.forRoot({
//         loader: {
//             provide: TranslateLoader,
//             useFactory: HttpLoaderFactory,
//             deps: [HttpClient]
//         }
//     })
//     ],
//     exports: [RouterModule],
//     providers: [AuthGuard]
// })
// export class AppRoutingModule { }

// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//     return new TranslateHttpLoader(http);
// }