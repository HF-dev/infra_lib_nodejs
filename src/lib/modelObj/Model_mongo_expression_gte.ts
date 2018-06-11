import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


import {Model_mongo_expression_comp } from "./Model_mongo_expression_comp"


/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_gte
*/
export class Model_mongo_expression_gte extends   Model_mongo_expression_comp   implements Interface.Imongo_expression_gte {

/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_gte
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "mongo_expression_gte" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_mongo_expression_gte>{
        return Model_mongo_expression_gte.check(target, true, path).then(()=>{
          return new Model_mongo_expression_gte(target) ;
        })
      }

   }
