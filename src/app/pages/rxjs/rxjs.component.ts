import {catchError, retry, map, filter} from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, throwError, Subscriber, Subscription } from 'rxjs';
import { rendererTypeName } from '@angular/compiler';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

   this.subscription = this.regresaObservable()

    .subscribe(
      numero => console.log('Subs', numero),
      error => console.log ('Error en el Observable', error),
      () => console.log('El observador termino')
    );

   }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('la página se va a cerrar');
    this.subscription.unsubscribe();

  }

  regresaObservable(): Observable<any> {

    return new Observable( ( observer: Subscriber<any>) => {

      let contador = 0;

        const intervalo = setInterval( () => {

          contador++;

          const salida  = {
            valor: contador
          };

          observer.next(salida);

       //   if (contador === 3){
       //     clearInterval(intervalo);
       //     observer.complete();
       //   }


        }, 1000);


      }).pipe(
        map(resp => resp.valor),
        filter( (valor , index) =>{

          if ((valor % 2) == 1){
            //impar
            return true;

          }else{
            //par
            return false;
          }

        }
        )

      );


  }

}
