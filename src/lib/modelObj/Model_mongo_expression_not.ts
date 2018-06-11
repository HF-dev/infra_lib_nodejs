import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


import {Model_mongo_expression_logical } from "./Model_mongo_expression_logical"


/**
  https://docs.mongodb.com/manual/reference/operator/query/not/
*/
export class Model_mongo_expression_not extends   Model_mongo_expression_logical   implements Interface.Imongo_expression_not {

/**
  https://docs.mongodb.com/manual/reference/operator/query/not/
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["field"] != undefined){
          
           this["field"] = obj["field"].toString() ;
           
        }
        
    
        
        if(obj["expression"] != undefined && obj["expression"] != null && _.isArray(obj["expression"])){
          

            this["expression"] = obj["expression"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["mongo_expression"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "mongo_expression_not" ;

        
              /**
        field
        */
               public "field":string ;
              
       
              /**
        expression
        */
               public "expression":Interface.Imongo_expression[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["field"] == null || target["field"] == undefined) ){
                  throw new Error(path + "field is required") ;
              }
              
              if(target["field"] != null && target["field"] != undefined ){
              
                let _field  = target["field"] ;
                

                 if(! _.isString(_field)){
                    throw new Error(path+"field is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["expression"] == null || target["expression"] == undefined) ){
                  throw new Error(path + "expression is required") ;
              }
              
              if(target["expression"] != null && target["expression"] != undefined ){
              
                  target["expression"].forEach((_expression , index:number)=>{
                  
                  
                    promArr.push( Index["mongo_expression"].check(_expression, isCompleteObj , path+"expression.")
                      .catch((err)=>{
                        throw new Error(path+"expression index: "+ index +"is not mongo_expression")
                        

                      }) )
                  if(_expression._class != null && _expression._class != undefined){
                    promArr.push( Index[_expression._class].check(_expression, isCompleteObj , path+"expression.")
                      .catch((err)=>{
                        throw new Error(path+"expression index: "+ index +"is not a " + _expression._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_mongo_expression_not>{
        return Model_mongo_expression_not.check(target, true, path).then(()=>{
          return new Model_mongo_expression_not(target) ;
        })
      }

   }
