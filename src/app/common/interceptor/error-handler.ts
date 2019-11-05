import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  
  handleError(error) {
      switch(error.constructor){
          case TypeError:
              console.log('Error de tipo: '+ error.message);
              break;
          case HttpErrorResponse:
              console.log('Error http');
              break;
      }

  }
}