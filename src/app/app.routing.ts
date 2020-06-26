// Importar modulos del router de Angular
import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

// Importar Componentes
//import { HomeComponent } from './home/home.component';

// Array de rutas
const appRoutes = [ // Path es el nombre de la ruta, component es el componente que va a cargar cuando esa ruta se ejecute en nuestro navegador
  {path:"",component: AboutComponent},
  {path:"sobremi",component: AboutComponent},
  {path:"contacto",component: ContactComponent},
  {path:"crearproyecto",component: CreateComponent},
  {path:"proyectos",component: ProjectsComponent},
  {path:"proyecto/:id",component: DetailComponent},
  {path:"editar-proyecto/:id",component: EditComponent},
  {path: "**", component:ErrorComponent} // Esta es la ruta 404, siempre tiene que ir al final, esta se corre cuando la ruta no esta asociada a ningun componente, y se corre el componente que le digas
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = []// El sevicio del router
export const Routing :any = RouterModule.forRoot(appRoutes);
