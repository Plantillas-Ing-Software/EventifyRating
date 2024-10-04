import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {inject} from "@angular/core";

/**
 * @class BaseService
 * @description
 * This is a generic base service class that provides common functionality for making HTTP requests
 * to a RESTful API. It includes methods for handling errors, constructing resource paths,
 * and fetching data from the server.
 * @template T - The type of the resource handled by the service.
 */
export class BaseService<T> {
  /**
   * @property httpOptions
   * @description
   * HTTP headers for the requests. The content type is set to JSON.
   */
  protected httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

  /**
   * @property http
   * @description
   * HTTP client for making requests to the server.
   */
  protected http: HttpClient = inject(HttpClient);

  /**
   * @property basePath
   * @description
   * Base path for the server. This is the URL of the server.
   */
  protected basePath: string = `${environment.serverBasePath}`;

  /**
   * @property resourceEndPoint
   * @description
   * The endpoint for the resource. This is the URL path for the resource.
   */
  protected resourceEndPoint: string = '/resources';

  /**
   * @method handleError
   * @description
   * Handles the error response from the server. It logs the error to the console and returns an observable with the error.
   * @param {HttpErrorResponse} error  - The error response from the server.
   */
  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  /**
   * @method resourcePath
   * @description
   * Build and returns the full path for the resource.
   * @returns {string} The full path for the resource.
   */
  protected resourcePath(): string {
    return `${this.basePath}${this.resourceEndPoint}`;
  }

  /**
   * @method getAllEvents
   * @description
   * Gets all the resources from the server.
   * @returns {Observable<Array<T>>} - An observable with the array of resources.
   */
  public getAllEvents(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.resourcePath(), this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * @method getAllAttendees
   * @description Fetches all attendees from the server.
   * @returns {Observable<Array<T>>} An observable containing an array of attendees.
   */
  public getAllAttendees(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.resourcePath(), this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * @method getAllRating
   * @description Fetches all ratings from the API and returns them as an observable array.
   * @returns {Observable<Array<T>>} An observable that emits an array of ratings.
   */
  public getAllRating(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.resourcePath(), this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}
