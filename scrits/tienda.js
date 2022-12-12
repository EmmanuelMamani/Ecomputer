
AFRAME.registerComponent('pedido', {
    init: function () {
      this.el.addEventListener('click', function (evt) {
          var cubo = document.getElementById('lista')
          cubo.setAttribute('position', "0.2 -0.5 1.3");
          var subtitulo = document.getElementById("subtitulo")
          subtitulo.setAttribute('position', "-0.3 0.45 1.4")
          console.log(cubo);
          var titulo = document.getElementById("titulo")
          titulo.setAttribute('position', "-0.3 0.5 1.4")
          var items = document.getElementsByClassName("items")
          var pos=0.4
          for(var i=0; i<items.length; i++){
            items[i].object3D.position.set(-0.3, pos, 1.4)
            pos-=0.05
          }
          var linea=document.getElementById("linea")
          var total=document.getElementById("total")
          linea.object3D.position.set(-0.3, -0.1, 1.4)
          total.object3D.position.set(-0.3, -0.15, 1.4)
          if(items.length==0){
            var alerta= document.getElementById("alerta")
            alerta.object3D.position.set(-0.3, 0.4, 1.4)
          }
          var close= document.getElementById("close")
          var enviar= document.getElementById("enviar")
          close.object3D.position.set(0.4, 0.6, 1.4)
          enviar.object3D.position.set(0, -0.3, 1.4)
      });
    }
  })
  AFRAME.registerComponent('closed', {
    init: function () {
      this.el.addEventListener('click', function (evt) {
          var cubo = document.getElementById('lista')
          cubo.setAttribute('position', "0.2 -3 1.3");
          var subtitulo = document.getElementById("subtitulo")
          subtitulo.setAttribute('position', "-0.3 -3 1.4")
          console.log(cubo);
          var titulo = document.getElementById("titulo")
          titulo.setAttribute('position', "-0.3 -3 1.4")
          var items = document.getElementsByClassName("items")
          var pos=-3
          for(var i=0; i<items.length; i++){
            items[i].object3D.position.set(-0.3, pos, 1.4)
            pos-=0.05
          }
          var linea=document.getElementById("linea")
          var total=document.getElementById("total")
          linea.object3D.position.set(-0.3, -3, 1.4)
          total.object3D.position.set(-0.3, -3, 1.4)
          if(items.length==0){
            var alerta= document.getElementById("alerta")
            alerta.object3D.position.set(-0.3, -3, 1.4)
          }
          var close= document.getElementById("close")
          var enviar= document.getElementById("enviar")
          close.object3D.position.set(0.4, -3, 1.4)
          enviar.object3D.position.set(0, -3, 1.4)
      });
    }
  })
  AFRAME.registerComponent('aumento1', {
    init: function () {
        this.el.addEventListener('click', () => {
          var cont = parseInt(document.getElementById('GC1').getAttribute("value"))+1
          document.getElementById('GC1').setAttribute('value', cont)
        })
    }
})

AFRAME.registerComponent('disminucion1', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont =parseInt(document.getElementById('GC1').getAttribute("value"))
        if(cont != 0){
          cont = parseInt(document.getElementById('GC1').getAttribute("value"))-1
        }
        document.getElementById('GC1').setAttribute('value', cont)
      })
  }
})

AFRAME.registerComponent('aniadir1', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont =parseInt(document.getElementById('GC1').getAttribute("value"))
        var texto= "Asus ZenBook\t"+cont+"\t1200Bs\t"+cont*1200+" bs"
      console.log(texto);
      var componente=document.getElementById("AsusZenBook")
      if(componente == null){
        var item = document.createElement('a-text')
        item.setAttribute("value", texto)
        item.setAttribute('class', 'items')
        item.setAttribute("color", "#000000")
        item.setAttribute("id", "AsusZenBook")
        item.setAttribute("width",0.9)
        item.object3D.position.set(-0.3, -3, 1.4)
        var items=document.getElementById("items")
        items.appendChild(item)
      }else{
        componente.setAttribute("value", texto)
      }
      })
  }
})
