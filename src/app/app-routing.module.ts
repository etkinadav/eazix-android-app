import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { ChoosePrintingSystemComponent } from "./main-section/choose-printing-system/choose-printing-system.component"
import { ChooseBranchComponent } from "./main-section/choose-branch/choose-branch.component"
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
    { path: "", component: ChoosePrintingSystemComponent },
    { path: "branch", component: ChooseBranchComponent },
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
