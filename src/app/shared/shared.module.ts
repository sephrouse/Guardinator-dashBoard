import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularWebStorageModule } from 'angular-web-storage';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
//components
import { EnvModalComponent } from './modal/envModal/env-modal.component';
import { ConfigModalComponent } from './modal/configModal/config-modal.component';
import { ScaleClusterModalComponent } from './modal/scaleClusterModal/scale-cluster-modal.component';
import { UserModalComponent } from './modal/userModal/user-modal.component';
import { RoleModalComponent } from './modal/roleModal/role-modal.component';
import { CustomerFilterDropdownComponent } from './component/customer-filter-dropdown/customer-filter-dropdown.component';
import { CustomerProgressComponent } from './component/customer-progress/customer-progress.component';
//directives
import { SparklineDirective } from './directives/sparkline/sparkline.directive';
import { FileValidator } from '@shared/fileValidator.directive';
import { FileValueAccessor } from '@shared/fileValueAccessor.directive';
//pipes
import { KeysPipe } from './pipes/keys.pipe';
import { YNPipe } from './pipes/yn.pipe';
import { ModalHelper } from './helper/modal.helper';
//interceptor
import { provideInterceptorService  } from 'ng2-interceptors'; 
import { HttpInterceptor } from './routerControl/http-interceptor';

const DIRECTIVES = [SparklineDirective,FileValidator,FileValueAccessor];
const PIPES = [ KeysPipe, YNPipe];
const HELPERS = [ ModalHelper ];
const COMPONENTS = [EnvModalComponent,ConfigModalComponent,ScaleClusterModalComponent,
                    UserModalComponent,RoleModalComponent,CustomerFilterDropdownComponent,CustomerProgressComponent];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularWebStorageModule,
        NgZorroAntdModule.forRoot()
    ],
    declarations: [...DIRECTIVES, ...PIPES, ...COMPONENTS],
    providers: [ 
        ...HELPERS,
        //配置http拦截器
        HttpInterceptor,
        provideInterceptorService([
            HttpInterceptor
        ])  
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        RouterModule,
        AngularWebStorageModule,
        TranslateModule,
        ...COMPONENTS,
        ...DIRECTIVES,
        ...PIPES
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}