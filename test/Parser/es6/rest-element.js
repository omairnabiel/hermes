// RUN: %hermesc --dump-ast --pretty-json %s | %FileCheck --match-full-lines %s

//CHECK:      {
//CHECK-NEXT:     "type": "Program",
//CHECK-NEXT:     "body": [

var [...a] = t;
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "VariableDeclaration",
//CHECK-NEXT:         "kind": "var",
//CHECK-NEXT:         "declarations": [
//CHECK-NEXT:           {
//CHECK-NEXT:             "type": "VariableDeclarator",
//CHECK-NEXT:             "init": {
//CHECK-NEXT:               "type": "Identifier",
//CHECK-NEXT:               "name": "t",
//CHECK-NEXT:               "typeAnnotation": null
//CHECK-NEXT:             },
//CHECK-NEXT:             "id": {
//CHECK-NEXT:               "type": "ArrayPattern",
//CHECK-NEXT:               "elements": [
//CHECK-NEXT:                 {
//CHECK-NEXT:                   "type": "RestElement",
//CHECK-NEXT:                   "argument": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "a",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   }
//CHECK-NEXT:                 }
//CHECK-NEXT:               ]
//CHECK-NEXT:             }
//CHECK-NEXT:           }
//CHECK-NEXT:         ]
//CHECK-NEXT:       },

var [...[b, c]] = t;
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "VariableDeclaration",
//CHECK-NEXT:         "kind": "var",
//CHECK-NEXT:         "declarations": [
//CHECK-NEXT:           {
//CHECK-NEXT:             "type": "VariableDeclarator",
//CHECK-NEXT:             "init": {
//CHECK-NEXT:               "type": "Identifier",
//CHECK-NEXT:               "name": "t",
//CHECK-NEXT:               "typeAnnotation": null
//CHECK-NEXT:             },
//CHECK-NEXT:             "id": {
//CHECK-NEXT:               "type": "ArrayPattern",
//CHECK-NEXT:               "elements": [
//CHECK-NEXT:                 {
//CHECK-NEXT:                   "type": "RestElement",
//CHECK-NEXT:                   "argument": {
//CHECK-NEXT:                     "type": "ArrayPattern",
//CHECK-NEXT:                     "elements": [
//CHECK-NEXT:                       {
//CHECK-NEXT:                         "type": "Identifier",
//CHECK-NEXT:                         "name": "b",
//CHECK-NEXT:                         "typeAnnotation": null
//CHECK-NEXT:                       },
//CHECK-NEXT:                       {
//CHECK-NEXT:                         "type": "Identifier",
//CHECK-NEXT:                         "name": "c",
//CHECK-NEXT:                         "typeAnnotation": null
//CHECK-NEXT:                       }
//CHECK-NEXT:                     ]
//CHECK-NEXT:                   }
//CHECK-NEXT:                 }
//CHECK-NEXT:               ]
//CHECK-NEXT:             }
//CHECK-NEXT:           }
//CHECK-NEXT:         ]
//CHECK-NEXT:       },

for(var[...d] in t);
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "ForInStatement",
//CHECK-NEXT:         "left": {
//CHECK-NEXT:           "type": "VariableDeclaration",
//CHECK-NEXT:           "kind": "var",
//CHECK-NEXT:           "declarations": [
//CHECK-NEXT:             {
//CHECK-NEXT:               "type": "VariableDeclarator",
//CHECK-NEXT:               "init": null,
//CHECK-NEXT:               "id": {
//CHECK-NEXT:                 "type": "ArrayPattern",
//CHECK-NEXT:                 "elements": [
//CHECK-NEXT:                   {
//CHECK-NEXT:                     "type": "RestElement",
//CHECK-NEXT:                     "argument": {
//CHECK-NEXT:                       "type": "Identifier",
//CHECK-NEXT:                       "name": "d",
//CHECK-NEXT:                       "typeAnnotation": null
//CHECK-NEXT:                     }
//CHECK-NEXT:                   }
//CHECK-NEXT:                 ]
//CHECK-NEXT:               }
//CHECK-NEXT:             }
//CHECK-NEXT:           ]
//CHECK-NEXT:         },
//CHECK-NEXT:         "right": {
//CHECK-NEXT:           "type": "Identifier",
//CHECK-NEXT:           "name": "t",
//CHECK-NEXT:           "typeAnnotation": null
//CHECK-NEXT:         },
//CHECK-NEXT:         "body": {
//CHECK-NEXT:           "type": "EmptyStatement"
//CHECK-NEXT:         }
//CHECK-NEXT:       },

[a, ...[b]] = t;
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "ExpressionStatement",
//CHECK-NEXT:         "expression": {
//CHECK-NEXT:           "type": "AssignmentExpression",
//CHECK-NEXT:           "operator": "=",
//CHECK-NEXT:           "left": {
//CHECK-NEXT:             "type": "ArrayPattern",
//CHECK-NEXT:             "elements": [
//CHECK-NEXT:               {
//CHECK-NEXT:                 "type": "Identifier",
//CHECK-NEXT:                 "name": "a",
//CHECK-NEXT:                 "typeAnnotation": null
//CHECK-NEXT:               },
//CHECK-NEXT:               {
//CHECK-NEXT:                 "type": "RestElement",
//CHECK-NEXT:                 "argument": {
//CHECK-NEXT:                   "type": "ArrayPattern",
//CHECK-NEXT:                   "elements": [
//CHECK-NEXT:                     {
//CHECK-NEXT:                       "type": "Identifier",
//CHECK-NEXT:                       "name": "b",
//CHECK-NEXT:                       "typeAnnotation": null
//CHECK-NEXT:                     }
//CHECK-NEXT:                   ]
//CHECK-NEXT:                 }
//CHECK-NEXT:               }
//CHECK-NEXT:             ]
//CHECK-NEXT:           },
//CHECK-NEXT:           "right": {
//CHECK-NEXT:             "type": "Identifier",
//CHECK-NEXT:             "name": "t",
//CHECK-NEXT:             "typeAnnotation": null
//CHECK-NEXT:           }
//CHECK-NEXT:         },
//CHECK-NEXT:         "directive": null
//CHECK-NEXT:       }

//CHECK-NEXT:     ]
//CHECK-NEXT:   }