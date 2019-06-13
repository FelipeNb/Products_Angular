import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ConfigureProductComponent } from './configure-product/configure-product.component';

const routes: Routes = [
  {
    path: 'product', component: ProductComponent, children: [
      { path: '', component: ListProductComponent },
      { path: 'configure', component: ConfigureProductComponent },
      { path: 'edit', component: EditProductComponent },
    ]
  },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
