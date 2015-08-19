angular.module('starter.services', [])

.factory('Questions', function() {

  var questions = [
    {"id":0,"topic":"inc","body":"Quel le débit nominal d'un tuyau de 45 ? (en L/min)","answer_type":"radio","answers":"[225, 250, 500, 750, 775, 1000]","correct_answer":"1"},
    {"id":1,"topic":"inc","body":"Quel le débit nominal d'un tuyau de 70 ? (en L/min)","answer_type":"radio","answers":"[225, 250, 500, 750, 775, 1000]","correct_answer":"2"},
    {"id":2,"topic":"inc","body":"Quel le débit nominal d'un tuyau de 110 ? (en L/min)","answer_type":"radio","answers":"[225, 250, 500, 750, 775, 1000]","correct_answer":"5"},
    {"id":3,"topic":"sap","body":"Quels sont les différents types de bilan ?","answer_type":"text","answers":"","correct_answer":"["},
    {"id":4,"topic":"sap","body":"Quelle est la position d'attente d'une victime inconsciente qui ventile ?","answer_type":"radio","answers":"[","correct_answer":"0"},
    {"id":5,"topic":"sap","body":"Citez les 3 causes possibles d'une inconscience.","answer_type":"text","answers":"","correct_answer":"["},
    {"id":6,"topic":"top","body":"Quels sont les 3 mode d'action de la mousse ?","answer_type":"text","answers":"","correct_answer":"["},
    {"id":7,"topic":"trs","body":"Quel canal peut-on utiliser avec les forces de l'ordre ?","answer_type":"radio","answers":"[","correct_answer":"0"},
    {"id":8,"topic":"div","body":"Quelles sont les tailles de bâches existantes ?","answer_type":"select","answers":"3m x 3,5m","correct_answer":"[0, 1]"},
    {"id":9,"topic":"goc","body":"Que signifie CODIS ?","answer_type":"text","answers":"","correct_answer":"Centre Opérationnel Départemental d'Incendie et de Secours"},
    {"id":10,"topic":"goc","body":"Que signifie CTA ?","answer_type":"text","answers":"","correct_answer":"Centre de Traitement de l'Alerte"},
    {"id":11,"topic":"goc","body":"Que signifie COGIC ?","answer_type":"text","answers":"","correct_answer":"Centre Opérationnel de Gestion Interministérielle de Crise"},
    {"id":12,"topic":"rtn","body":"Quels sont les moyens de limiter le risque radioactif ?","answer_type":"text","answers":"","correct_answer":"["},
    {"id":13,"topic":"rtn","body":"Que signifie le ","answer_type":"radio","answers":"[","correct_answer":"0"},
    {"id":14,"topic":"rtn","body":"Le GPL (Gaz de Pétrol Liquéfié) est composé de deux gaz, lesquels ?","answer_type":"select","answers":"[","correct_answer":"[1, 2]"},
    {"id":15,"topic":"hlq","body":"Quelle est la perte de charge pour une tuyau de diamètre 45 ? (en bar/hm)","answer_type":"radio","answers":"[","correct_answer":"0"},
    {"id":16,"topic":"hlq","body":"Quelle est la perte de charge pour une tuyau de diamètre 70 ? (en bar/hm)","answer_type":"radio","answers":"[","correct_answer":"1"},
    {"id":17,"topic":"hlq","body":"Quelle est la perte de charge pour une tuyau de diamètre 110 ? (en bar/hm)","answer_type":"radio","answers":"[","correct_answer":"2"}
  ]

  return {
    all: function() {
      return questions;
    },
    remove: function(question) {
      questions.splice(questions.indexOf(question), 1);
    },
    get: function(questionId) {
      for (var i = 0; i < questions.length; i++) {
        if (questions[i].id === parseInt(questionId)) {
          return questions[i];
        }
      }
      return null;
    }
  };
});
