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
