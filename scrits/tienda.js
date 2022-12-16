
AFRAME.registerComponent('pedido', {
    init: function () {
      this.el.addEventListener('click', function (evt) {
        var precio=0
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
            pos-=0.07
            precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
          }
          var eliminar=document.getElementsByClassName("eliminar")
          var posE=0.35
          for(var i=0 ;i<eliminar.length;i++){
            eliminar[i].object3D.position.set(0.5,posE,1.4 )
            posE-=0.07
          }
          var linea=document.getElementById("linea")
          var total=document.getElementById("total")
          total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
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
          var eliminar=document.getElementsByClassName("eliminar")
          var pos=-3
          for(var i=0; i<items.length; i++){
            items[i].object3D.position.set(-0.3, pos, 1.4)
          }
          for(var i=0; i<eliminar.length; i++){
            eliminar[i].object3D.position.set(-0.3, pos, 1.4)
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
  //Primer articulo
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
        var texto= "Asus ZenBook\t"+cont+"\t12000Bs\t"+cont*12000+" bs"
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
        var btn = document.createElement("a-entity")
        btn.setAttribute("gltf-model","./modelos/menoslista.glb")
        btn.setAttribute("class", "eliminar")
        btn.setAttribute("quitar1", "")
        btn.object3D.position.set(0.5,-3,1.4 ) //0.35
        items.appendChild(btn)
      }else{
        componente.setAttribute("value", texto)
      }
      })
  }
})

AFRAME.registerComponent('quitar1', {
  init: function () {
      this.el.addEventListener('click', () => {
        var items=document.getElementById("items") 
        var item=document.getElementById("AsusZenBook")
        items.removeChild(item)
        items.removeChild(this.el)
        var items = document.getElementsByClassName("items")
        var precio=0
        for(var i=0; i<items.length; i++){
          precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
        }
        var total=document.getElementById("total")
          total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
      })
  }
})

// Segundo item

AFRAME.registerComponent('aumento2', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont = parseInt(document.getElementById('GC2').getAttribute("value"))+1
        document.getElementById('GC2').setAttribute('value', cont)
      })
  }
})

AFRAME.registerComponent('disminucion2', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC2').getAttribute("value"))
      if(cont != 0){
        cont = parseInt(document.getElementById('GC2').getAttribute("value"))-1
      }
      document.getElementById('GC2').setAttribute('value', cont)
    })
}
})

AFRAME.registerComponent('aniadir2', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC2').getAttribute("value"))
      var texto= "Dell XPS 13\t"+cont+"\t10650Bs\t"+cont*10650+" bs"
    console.log(texto);
    var componente=document.getElementById("DelXPS")
    if(componente == null){
      var item = document.createElement('a-text')
      item.setAttribute("value", texto)
      item.setAttribute('class', 'items')
      item.setAttribute("color", "#000000")
      item.setAttribute("id", "DelXPS")
      item.setAttribute("width",0.9)
      item.object3D.position.set(-0.3, -3, 1.4)
      var items=document.getElementById("items")
      items.appendChild(item)
      var btn = document.createElement("a-entity")
      btn.setAttribute("gltf-model","./modelos/menoslista.glb")
      btn.setAttribute("class", "eliminar")
      btn.setAttribute("quitar2", "")
      btn.object3D.position.set(0.5,-3,1.4 ) //0.35
      items.appendChild(btn)
    }else{
      componente.setAttribute("value", texto)
    }
    })
}
})

AFRAME.registerComponent('quitar2', {
init: function () {
    this.el.addEventListener('click', () => {
      var items=document.getElementById("items") 
      var item=document.getElementById("DelXPS")
      items.removeChild(item)
      items.removeChild(this.el)
      var items = document.getElementsByClassName("items")
        var precio=0
        for(var i=0; i<items.length; i++){
          precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
        }
        var total=document.getElementById("total")
          total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
    })
}
})

//Tercer item

AFRAME.registerComponent('aumento3', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont = parseInt(document.getElementById('GC3').getAttribute("value"))+1
        document.getElementById('GC3').setAttribute('value', cont)
      })
  }
})

AFRAME.registerComponent('disminucion3', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC3').getAttribute("value"))
      if(cont != 0){
        cont = parseInt(document.getElementById('GC3').getAttribute("value"))-1
      }
      document.getElementById('GC3').setAttribute('value', cont)
    })
}
})

AFRAME.registerComponent('aniadir3', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC3').getAttribute("value"))
      var texto= "Zephyrus G14\t"+cont+"\t13050Bs\t"+cont*13050+" bs"
    console.log(texto);
    var componente=document.getElementById("Zephyrus")
    if(componente == null){
      var item = document.createElement('a-text')
      item.setAttribute("value", texto)
      item.setAttribute('class', 'items')
      item.setAttribute("color", "#000000")
      item.setAttribute("id", "Zephyrus")
      item.setAttribute("width",0.9)
      item.object3D.position.set(-0.3, -3, 1.4)
      var items=document.getElementById("items")
      items.appendChild(item)
      var btn = document.createElement("a-entity")
      btn.setAttribute("gltf-model","./modelos/menoslista.glb")
      btn.setAttribute("class", "eliminar")
      btn.setAttribute("quitar3", "")
      btn.object3D.position.set(0.5,-3,1.4 ) //0.35
      items.appendChild(btn)
    }else{
      componente.setAttribute("value", texto)
    }
    })
}
})

AFRAME.registerComponent('quitar3', {
init: function () {
    this.el.addEventListener('click', () => {
      var items=document.getElementById("items") 
      var item=document.getElementById("Zephyrus")
      items.removeChild(item)
      items.removeChild(this.el)
      var items = document.getElementsByClassName("items")
        var precio=0
        for(var i=0; i<items.length; i++){
          precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
        }
        var total=document.getElementById("total")
          total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
    })
}
})


 //cuarto articulo
 AFRAME.registerComponent('aumento4', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont = parseInt(document.getElementById('GC4').getAttribute("value"))+1
        document.getElementById('GC4').setAttribute('value', cont)
      })
  }
})

AFRAME.registerComponent('disminucion4', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC4').getAttribute("value"))
      if(cont != 0){
        cont = parseInt(document.getElementById('GC4').getAttribute("value"))-1
      }
      document.getElementById('GC4').setAttribute('value', cont)
    })
}
})

AFRAME.registerComponent('aniadir4', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC4').getAttribute("value"))
      var texto= "Chromebook\t"+cont+"\t8600Bs\t"+cont*8600+" bs"
    console.log(texto);
    var componente=document.getElementById("Chromebook")
    if(componente == null){
      var item = document.createElement('a-text')
      item.setAttribute("value", texto)
      item.setAttribute('class', 'items')
      item.setAttribute("color", "#000000")
      item.setAttribute("id", "Chromebook")
      item.setAttribute("width",0.9)
      item.object3D.position.set(-0.3, -3, 1.4)
      var items=document.getElementById("items")
      items.appendChild(item)
      var btn = document.createElement("a-entity")
      btn.setAttribute("gltf-model","./modelos/menoslista.glb")
      btn.setAttribute("class", "eliminar")
      btn.setAttribute("quitar4", "")
      btn.object3D.position.set(0.5,-3,1.4 ) //0.35
      items.appendChild(btn)
    }else{
      componente.setAttribute("value", texto)
    }
    })
}
})

AFRAME.registerComponent('quitar4', {
init: function () {
    this.el.addEventListener('click', () => {
      var items=document.getElementById("items") 
      var item=document.getElementById("Chromebook")
      items.removeChild(item)
      items.removeChild(this.el)
      var items = document.getElementsByClassName("items")
      var precio=0
      for(var i=0; i<items.length; i++){
        precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
      }
      var total=document.getElementById("total")
        total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
    })
}
})

// Quinto item

AFRAME.registerComponent('aumento5', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont = parseInt(document.getElementById('GC5').getAttribute("value"))+1
      document.getElementById('GC5').setAttribute('value', cont)
    })
}
})

AFRAME.registerComponent('disminucion5', {
init: function () {
  this.el.addEventListener('click', () => {
    var cont =parseInt(document.getElementById('GC5').getAttribute("value"))
    if(cont != 0){
      cont = parseInt(document.getElementById('GC5').getAttribute("value"))-1
    }
    document.getElementById('GC5').setAttribute('value', cont)
  })
}
})

AFRAME.registerComponent('aniadir5', {
init: function () {
  this.el.addEventListener('click', () => {
    var cont =parseInt(document.getElementById('GC5').getAttribute("value"))
    var texto= "Think Pad 13\t"+cont+"\t12300Bs\t"+cont*12300+" bs"
  console.log(texto);
  var componente=document.getElementById("Think")
  if(componente == null){
    var item = document.createElement('a-text')
    item.setAttribute("value", texto)
    item.setAttribute('class', 'items')
    item.setAttribute("color", "#000000")
    item.setAttribute("id", "Think")
    item.setAttribute("width",0.9)
    item.object3D.position.set(-0.3, -3, 1.4)
    var items=document.getElementById("items")
    items.appendChild(item)
    var btn = document.createElement("a-entity")
    btn.setAttribute("gltf-model","./modelos/menoslista.glb")
    btn.setAttribute("class", "eliminar")
    btn.setAttribute("quitar5", "")
    btn.object3D.position.set(0.5,-3,1.4 ) //0.35
    items.appendChild(btn)
  }else{
    componente.setAttribute("value", texto)
  }
  })
}
})

AFRAME.registerComponent('quitar5', {
init: function () {
  this.el.addEventListener('click', () => {
    var items=document.getElementById("items") 
    var item=document.getElementById("Think")
    items.removeChild(item)
    items.removeChild(this.el)
    var items = document.getElementsByClassName("items")
      var precio=0
      for(var i=0; i<items.length; i++){
        precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
      }
      var total=document.getElementById("total")
        total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
  })
}
})

//Sexto item

AFRAME.registerComponent('aumento6', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont = parseInt(document.getElementById('GC6').getAttribute("value"))+1
      document.getElementById('GC6').setAttribute('value', cont)
    })
}
})

AFRAME.registerComponent('disminucion6', {
init: function () {
  this.el.addEventListener('click', () => {
    var cont =parseInt(document.getElementById('GC6').getAttribute("value"))
    if(cont != 0){
      cont = parseInt(document.getElementById('GC6').getAttribute("value"))-1
    }
    document.getElementById('GC6').setAttribute('value', cont)
  })
}
})

AFRAME.registerComponent('aniadir6', {
init: function () {
  this.el.addEventListener('click', () => {
    var cont =parseInt(document.getElementById('GC6').getAttribute("value"))
    var texto= "Macbook Air\t"+cont+"\t9680Bs\t"+cont*9680+" bs"
  console.log(texto);
  var componente=document.getElementById("Macbook")
  if(componente == null){
    var item = document.createElement('a-text')
    item.setAttribute("value", texto)
    item.setAttribute('class', 'items')
    item.setAttribute("color", "#000000")
    item.setAttribute("id", "Macbook")
    item.setAttribute("width",0.9)
    item.object3D.position.set(-0.3, -3, 1.4)
    var items=document.getElementById("items")
    items.appendChild(item)
    var btn = document.createElement("a-entity")
    btn.setAttribute("gltf-model","./modelos/menoslista.glb")
    btn.setAttribute("class", "eliminar")
    btn.setAttribute("quitar6", "")
    btn.object3D.position.set(0.5,-3,1.4 ) //0.35
    items.appendChild(btn)
  }else{
    componente.setAttribute("value", texto)
  }
  })
}
})

AFRAME.registerComponent('quitar6', {
init: function () {
  this.el.addEventListener('click', () => {
    var items=document.getElementById("items") 
    var item=document.getElementById("Macbook")
    items.removeChild(item)
    items.removeChild(this.el)
    var items = document.getElementsByClassName("items")
      var precio=0
      for(var i=0; i<items.length; i++){
        precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
      }
      var total=document.getElementById("total")
        total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
  })
}
})


// septimo item

AFRAME.registerComponent('aumento7', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont = parseInt(document.getElementById('GC7').getAttribute("value"))+1
        document.getElementById('GC7').setAttribute('value', cont)
      })
  }
  })
  
  AFRAME.registerComponent('disminucion7', {
  init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC7').getAttribute("value"))
      if(cont != 0){
        cont = parseInt(document.getElementById('GC7').getAttribute("value"))-1
      }
      document.getElementById('GC7').setAttribute('value', cont)
    })
  }
  })
  
  AFRAME.registerComponent('aniadir7', {
  init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC7').getAttribute("value"))
      var texto= "Surface Pro9\t"+cont+"\t10900Bs\t"+cont*10900+" bs"
    console.log(texto);
    var componente=document.getElementById("Surface")
    if(componente == null){
      var item = document.createElement('a-text')
      item.setAttribute("value", texto)
      item.setAttribute('class', 'items')
      item.setAttribute("color", "#000000")
      item.setAttribute("id", "Surface")
      item.setAttribute("width",0.9)
      item.object3D.position.set(-0.3, -3, 1.4)
      var items=document.getElementById("items")
      items.appendChild(item)
      var btn = document.createElement("a-entity")
      btn.setAttribute("gltf-model","./modelos/menoslista.glb")
      btn.setAttribute("class", "eliminar")
      btn.setAttribute("quitar7", "")
      btn.object3D.position.set(0.5,-3,1.4 ) //0.35
      items.appendChild(btn)
    }else{
      componente.setAttribute("value", texto)
    }
    })
  }
  })
  
  AFRAME.registerComponent('quitar7', {
  init: function () {
    this.el.addEventListener('click', () => {
      var items=document.getElementById("items") 
      var item=document.getElementById("Surface")
      items.removeChild(item)
      items.removeChild(this.el)
      var items = document.getElementsByClassName("items")
        var precio=0
        for(var i=0; i<items.length; i++){
          precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
        }
        var total=document.getElementById("total")
          total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
    })
  }
  })
  
  //Sexto item
  
  AFRAME.registerComponent('aumento8', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont = parseInt(document.getElementById('GC8').getAttribute("value"))+1
        document.getElementById('GC8').setAttribute('value', cont)
      })
  }
  })
  
  AFRAME.registerComponent('disminucion8', {
  init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC8').getAttribute("value"))
      if(cont != 0){
        cont = parseInt(document.getElementById('GC8').getAttribute("value"))-1
      }
      document.getElementById('GC8').setAttribute('value', cont)
    })
  }
  })
  
  AFRAME.registerComponent('aniadir8', {
  init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC8').getAttribute("value"))
      var texto= "Razer Blade\t"+cont+"\t11620Bs\t"+cont*11620+" bs"
    console.log(texto);
    var componente=document.getElementById("Razer")
    if(componente == null){
      var item = document.createElement('a-text')
      item.setAttribute("value", texto)
      item.setAttribute('class', 'items')
      item.setAttribute("color", "#000000")
      item.setAttribute("id", "Razer")
      item.setAttribute("width",0.9)
      item.object3D.position.set(-0.3, -3, 1.4)
      var items=document.getElementById("items")
      items.appendChild(item)
      var btn = document.createElement("a-entity")
      btn.setAttribute("gltf-model","./modelos/menoslista.glb")
      btn.setAttribute("class", "eliminar")
      btn.setAttribute("quitar8", "")
      btn.object3D.position.set(0.5,-3,1.4 ) //0.35
      items.appendChild(btn)
    }else{
      componente.setAttribute("value", texto)
    }
    })
  }
  })
  
  AFRAME.registerComponent('quitar8', {
  init: function () {
    this.el.addEventListener('click', () => {
      var items=document.getElementById("items") 
      var item=document.getElementById("Razer")
      items.removeChild(item)
      items.removeChild(this.el)
      var items = document.getElementsByClassName("items")
        var precio=0
        for(var i=0; i<items.length; i++){
          precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
        }
        var total=document.getElementById("total")
          total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
    })
  }
  })
  

  ///////////////////  derecha
   //Primer articulo D
   AFRAME.registerComponent('aumento9', {
    init: function () {
        this.el.addEventListener('click', () => {
          var cont = parseInt(document.getElementById('GC9').getAttribute("value"))+1
          document.getElementById('GC9').setAttribute('value', cont)
        })
    }
})

AFRAME.registerComponent('disminucion9', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont =parseInt(document.getElementById('GC9').getAttribute("value"))
        if(cont != 0){
          cont = parseInt(document.getElementById('GC9').getAttribute("value"))-1
        }
        document.getElementById('GC9').setAttribute('value', cont)
      })
  }
})

AFRAME.registerComponent('aniadir9', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont =parseInt(document.getElementById('GC9').getAttribute("value"))
        var texto= "I5-P058NG\t"+cont+"\t800Bs\t"+cont*800+" bs"
      console.log(texto);
      var componente=document.getElementById("I5-P058NG")
      if(componente == null){
        var item = document.createElement('a-text')
        item.setAttribute("value", texto)
        item.setAttribute('class', 'items')
        item.setAttribute("color", "#000000")
        item.setAttribute("id", "I5-P058NG")
        item.setAttribute("width",0.9)
        item.object3D.position.set(-0.3, -3, 1.4)
        var items=document.getElementById("items")
        items.appendChild(item)
        var btn = document.createElement("a-entity")
        btn.setAttribute("gltf-model","./modelos/menoslista.glb")
        btn.setAttribute("class", "eliminar")
        btn.setAttribute("quitar9", "")
        btn.object3D.position.set(0.5,-3,1.4 ) //0.35
        items.appendChild(btn)
      }else{
        componente.setAttribute("value", texto)
      }
      })
  }
})

AFRAME.registerComponent('quitar9', {
  init: function () {
      this.el.addEventListener('click', () => {
        var items=document.getElementById("items") 
        var item=document.getElementById("I5-P058NG")
        items.removeChild(item)
        items.removeChild(this.el)
        var items = document.getElementsByClassName("items")
        var precio=0
        for(var i=0; i<items.length; i++){
          precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
        }
        var total=document.getElementById("total")
          total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
      })
  }
})

// Segundo item

AFRAME.registerComponent('aumento10', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont = parseInt(document.getElementById('GC10').getAttribute("value"))+1
        document.getElementById('GC10').setAttribute('value', cont)
      })
  }
})

AFRAME.registerComponent('disminucion10', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC10').getAttribute("value"))
      if(cont != 0){
        cont = parseInt(document.getElementById('GC10').getAttribute("value"))-1
      }
      document.getElementById('GC10').setAttribute('value', cont)
    })
}
})

AFRAME.registerComponent('aniadir10', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC10').getAttribute("value"))
      var texto= "SIMMS\t"+cont+"\t620Bs\t"+cont*620+" bs"
    console.log(texto);
    var componente=document.getElementById("SIMMS")
    if(componente == null){
      var item = document.createElement('a-text')
      item.setAttribute("value", texto)
      item.setAttribute('class', 'items')
      item.setAttribute("color", "#000000")
      item.setAttribute("id", "SIMMS")
      item.setAttribute("width",0.9)
      item.object3D.position.set(-0.3, -3, 1.4)
      var items=document.getElementById("items")
      items.appendChild(item)
      var btn = document.createElement("a-entity")
      btn.setAttribute("gltf-model","./modelos/menoslista.glb")
      btn.setAttribute("class", "eliminar")
      btn.setAttribute("quitar10", "")
      btn.object3D.position.set(0.5,-3,1.4 ) //0.35
      items.appendChild(btn)
    }else{
      componente.setAttribute("value", texto)
    }
    })
}
})

AFRAME.registerComponent('quitar10', {
init: function () {
    this.el.addEventListener('click', () => {
      var items=document.getElementById("items") 
      var item=document.getElementById("SIMMS")
      items.removeChild(item)
      items.removeChild(this.el)
      var items = document.getElementsByClassName("items")
        var precio=0
        for(var i=0; i<items.length; i++){
          precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
        }
        var total=document.getElementById("total")
          total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
    })
}
})

//Tercer item

AFRAME.registerComponent('aumento11', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont = parseInt(document.getElementById('GC11').getAttribute("value"))+1
        document.getElementById('GC11').setAttribute('value', cont)
      })
  }
})

AFRAME.registerComponent('disminucion11', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC11').getAttribute("value"))
      if(cont != 0){
        cont = parseInt(document.getElementById('GC11').getAttribute("value"))-1
      }
      document.getElementById('GC11').setAttribute('value', cont)
    })
}
})

AFRAME.registerComponent('aniadir11', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC11').getAttribute("value"))
      var texto= "DIMM\t"+cont+"\t780Bs\t"+cont*780+" bs"
    console.log(texto);
    var componente=document.getElementById("DIMM")
    if(componente == null){
      var item = document.createElement('a-text')
      item.setAttribute("value", texto)
      item.setAttribute('class', 'items')
      item.setAttribute("color", "#000000")
      item.setAttribute("id", "DIMM")
      item.setAttribute("width",0.9)
      item.object3D.position.set(-0.3, -3, 1.4)
      var items=document.getElementById("items")
      items.appendChild(item)
      var btn = document.createElement("a-entity")
      btn.setAttribute("gltf-model","./modelos/menoslista.glb")
      btn.setAttribute("class", "eliminar")
      btn.setAttribute("quitar11", "")
      btn.object3D.position.set(0.5,-3,1.4 ) //0.35
      items.appendChild(btn)
    }else{
      componente.setAttribute("value", texto)
    }
    })
}
})

AFRAME.registerComponent('quitar11', {
init: function () {
    this.el.addEventListener('click', () => {
      var items=document.getElementById("items") 
      var item=document.getElementById("DIMM")
      items.removeChild(item)
      items.removeChild(this.el)
      var items = document.getElementsByClassName("items")
        var precio=0
        for(var i=0; i<items.length; i++){
          precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
        }
        var total=document.getElementById("total")
          total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
    })
}
})


 //cuarto articulo
 AFRAME.registerComponent('aumento12', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont = parseInt(document.getElementById('GC12').getAttribute("value"))+1
        document.getElementById('GC12').setAttribute('value', cont)
      })
  }
})

AFRAME.registerComponent('disminucion12', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC12').getAttribute("value"))
      if(cont != 0){
        cont = parseInt(document.getElementById('GC12').getAttribute("value"))-1
      }
      document.getElementById('GC12').setAttribute('value', cont)
    })
}
})

AFRAME.registerComponent('aniadir12', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC12').getAttribute("value"))
      var texto= "Serial ATA\t"+cont+"\t910Bs\t"+cont*910+" bs"
    console.log(texto);
    var componente=document.getElementById("Serial")
    if(componente == null){
      var item = document.createElement('a-text')
      item.setAttribute("value", texto)
      item.setAttribute('class', 'items')
      item.setAttribute("color", "#000000")
      item.setAttribute("id", "Serial")
      item.setAttribute("width",0.9)
      item.object3D.position.set(-0.3, -3, 1.4)
      var items=document.getElementById("items")
      items.appendChild(item)
      var btn = document.createElement("a-entity")
      btn.setAttribute("gltf-model","./modelos/menoslista.glb")
      btn.setAttribute("class", "eliminar")
      btn.setAttribute("quitar12", "")
      btn.object3D.position.set(0.5,-3,1.4 ) //0.35
      items.appendChild(btn)
    }else{
      componente.setAttribute("value", texto)
    }
    })
}
})

AFRAME.registerComponent('quitar12', {
init: function () {
    this.el.addEventListener('click', () => {
      var items=document.getElementById("items") 
      var item=document.getElementById("Serial")
      items.removeChild(item)
      items.removeChild(this.el)
      var items = document.getElementsByClassName("items")
      var precio=0
      for(var i=0; i<items.length; i++){
        precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
      }
      var total=document.getElementById("total")
        total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
    })
}
})

// Quinto item

AFRAME.registerComponent('aumento13', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont = parseInt(document.getElementById('GC13').getAttribute("value"))+1
      document.getElementById('GC13').setAttribute('value', cont)
    })
}
})

AFRAME.registerComponent('disminucion13', {
init: function () {
  this.el.addEventListener('click', () => {
    var cont =parseInt(document.getElementById('GC13').getAttribute("value"))
    if(cont != 0){
      cont = parseInt(document.getElementById('GC13').getAttribute("value"))-1
    }
    document.getElementById('GC13').setAttribute('value', cont)
  })
}
})

AFRAME.registerComponent('aniadir13', {
init: function () {
  this.el.addEventListener('click', () => {
    var cont =parseInt(document.getElementById('GC13').getAttribute("value"))
    var texto= "SCSI\t"+cont+"\t820Bs\t"+cont*820+" bs"
  console.log(texto);
  var componente=document.getElementById("SCSI")
  if(componente == null){
    var item = document.createElement('a-text')
    item.setAttribute("value", texto)
    item.setAttribute('class', 'items')
    item.setAttribute("color", "#000000")
    item.setAttribute("id", "SCSI")
    item.setAttribute("width",0.9)
    item.object3D.position.set(-0.3, -3, 1.4)
    var items=document.getElementById("items")
    items.appendChild(item)
    var btn = document.createElement("a-entity")
    btn.setAttribute("gltf-model","./modelos/menoslista.glb")
    btn.setAttribute("class", "eliminar")
    btn.setAttribute("quitar13", "")
    btn.object3D.position.set(0.5,-3,1.4 ) //0.35
    items.appendChild(btn)
  }else{
    componente.setAttribute("value", texto)
  }
  })
}
})

AFRAME.registerComponent('quitar13', {
init: function () {
  this.el.addEventListener('click', () => {
    var items=document.getElementById("items") 
    var item=document.getElementById("SCSI")
    items.removeChild(item)
    items.removeChild(this.el)
    var items = document.getElementsByClassName("items")
      var precio=0
      for(var i=0; i<items.length; i++){
        precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
      }
      var total=document.getElementById("total")
        total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
  })
}
})

//Sexto item

AFRAME.registerComponent('aumento14', {
init: function () {
    this.el.addEventListener('click', () => {
      var cont = parseInt(document.getElementById('GC14').getAttribute("value"))+1
      document.getElementById('GC14').setAttribute('value', cont)
    })
}
})

AFRAME.registerComponent('disminucion14', {
init: function () {
  this.el.addEventListener('click', () => {
    var cont =parseInt(document.getElementById('GC14').getAttribute("value"))
    if(cont != 0){
      cont = parseInt(document.getElementById('GC14').getAttribute("value"))-1
    }
    document.getElementById('GC14').setAttribute('value', cont)
  })
}
})

AFRAME.registerComponent('aniadir14', {
init: function () {
  this.el.addEventListener('click', () => {
    var cont =parseInt(document.getElementById('GC14').getAttribute("value"))
    var texto= "Biostar\t"+cont+"\t750Bs\t"+cont*750+" bs"
  console.log(texto);
  var componente=document.getElementById("Biostar")
  if(componente == null){
    var item = document.createElement('a-text')
    item.setAttribute("value", texto)
    item.setAttribute('class', 'items')
    item.setAttribute("color", "#000000")
    item.setAttribute("id", "Biostar")
    item.setAttribute("width",0.9)
    item.object3D.position.set(-0.3, -3, 1.4)
    var items=document.getElementById("items")
    items.appendChild(item)
    var btn = document.createElement("a-entity")
    btn.setAttribute("gltf-model","./modelos/menoslista.glb")
    btn.setAttribute("class", "eliminar")
    btn.setAttribute("quitar14", "")
    btn.object3D.position.set(0.5,-3,1.4 ) //0.35
    items.appendChild(btn)
  }else{
    componente.setAttribute("value", texto)
  }
  })
}
})

AFRAME.registerComponent('quitar14', {
init: function () {
  this.el.addEventListener('click', () => {
    var items=document.getElementById("items") 
    var item=document.getElementById("Biostar")
    items.removeChild(item)
    items.removeChild(this.el)
    var items = document.getElementsByClassName("items")
      var precio=0
      for(var i=0; i<items.length; i++){
        precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
      }
      var total=document.getElementById("total")
        total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
  })
}
})


// septimo item

AFRAME.registerComponent('aumento15', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont = parseInt(document.getElementById('GC15').getAttribute("value"))+1
        document.getElementById('GC15').setAttribute('value', cont)
      })
  }
  })
  
  AFRAME.registerComponent('disminucion15', {
  init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC15').getAttribute("value"))
      if(cont != 0){
        cont = parseInt(document.getElementById('GC15').getAttribute("value"))-1
      }
      document.getElementById('GC15').setAttribute('value', cont)
    })
  }
  })
  
  AFRAME.registerComponent('aniadir15', {
  init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC15').getAttribute("value"))
      var texto= "Gygabite\t"+cont+"\t320Bs\t"+cont*320+" bs"
    console.log(texto);
    var componente=document.getElementById("Gygabite")
    if(componente == null){
      var item = document.createElement('a-text')
      item.setAttribute("value", texto)
      item.setAttribute('class', 'items')
      item.setAttribute("color", "#000000")
      item.setAttribute("id", "Gygabite")
      item.setAttribute("width",0.9)
      item.object3D.position.set(-0.3, -3, 1.4)
      var items=document.getElementById("items")
      items.appendChild(item)
      var btn = document.createElement("a-entity")
      btn.setAttribute("gltf-model","./modelos/menoslista.glb")
      btn.setAttribute("class", "eliminar")
      btn.setAttribute("quitar15", "")
      btn.object3D.position.set(0.5,-3,1.4 ) //0.35
      items.appendChild(btn)
    }else{
      componente.setAttribute("value", texto)
    }
    })
  }
  })
  
  AFRAME.registerComponent('quitar15', {
  init: function () {
    this.el.addEventListener('click', () => {
      var items=document.getElementById("items") 
      var item=document.getElementById("Gygabite")
      items.removeChild(item)
      items.removeChild(this.el)
      var items = document.getElementsByClassName("items")
        var precio=0
        for(var i=0; i<items.length; i++){
          precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
        }
        var total=document.getElementById("total")
          total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
    })
  }
  })
  
  //Sexto item
  
  AFRAME.registerComponent('aumento16', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont = parseInt(document.getElementById('GC16').getAttribute("value"))+1
        document.getElementById('GC16').setAttribute('value', cont)
      })
  }
  })
  
  AFRAME.registerComponent('disminucion16', {
  init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC16').getAttribute("value"))
      if(cont != 0){
        cont = parseInt(document.getElementById('GC16').getAttribute("value"))-1
      }
      document.getElementById('GC16').setAttribute('value', cont)
    })
  }
  })
  
  AFRAME.registerComponent('aniadir16', {
  init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC16').getAttribute("value"))
      var texto= "RTX2080\t"+cont+"\t560Bs\t"+cont*560+" bs"
    console.log(texto);
    var componente=document.getElementById("RTX2080")
    if(componente == null){
      var item = document.createElement('a-text')
      item.setAttribute("value", texto)
      item.setAttribute('class', 'items')
      item.setAttribute("color", "#000000")
      item.setAttribute("id", "RTX2080")
      item.setAttribute("width",0.9)
      item.object3D.position.set(-0.3, -3, 1.4)
      var items=document.getElementById("items")
      items.appendChild(item)
      var btn = document.createElement("a-entity")
      btn.setAttribute("gltf-model","./modelos/menoslista.glb")
      btn.setAttribute("class", "eliminar")
      btn.setAttribute("quitar16", "")
      btn.object3D.position.set(0.5,-3,1.4 ) //0.35
      items.appendChild(btn)
    }else{
      componente.setAttribute("value", texto)
    }
    })
  }
  })
  
  AFRAME.registerComponent('quitar16', {
  init: function () {
    this.el.addEventListener('click', () => {
      var items=document.getElementById("items") 
      var item=document.getElementById("RTX2080")
      items.removeChild(item)
      items.removeChild(this.el)
      var items = document.getElementsByClassName("items")
        var precio=0
        for(var i=0; i<items.length; i++){
          precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
        }
        var total=document.getElementById("total")
          total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
    })
  }
  })

    //Septo item
  
    AFRAME.registerComponent('aumento17', {
      init: function () {
          this.el.addEventListener('click', () => {
            var cont = parseInt(document.getElementById('GC17').getAttribute("value"))+1
            document.getElementById('GC17').setAttribute('value', cont)
          })
      }
      })
      
      AFRAME.registerComponent('disminucion17', {
      init: function () {
        this.el.addEventListener('click', () => {
          var cont =parseInt(document.getElementById('GC17').getAttribute("value"))
          if(cont != 0){
            cont = parseInt(document.getElementById('GC17').getAttribute("value"))-1
          }
          document.getElementById('GC17').setAttribute('value', cont)
        })
      }
      })
      
      AFRAME.registerComponent('aniadir17', {
      init: function () {
        this.el.addEventListener('click', () => {
          var cont =parseInt(document.getElementById('GC17').getAttribute("value"))
          var texto= "RTX2070\t"+cont+"\t640Bs\t"+cont*640+" bs"
        console.log(texto);
        var componente=document.getElementById("RTX2070")
        if(componente == null){
          var item = document.createElement('a-text')
          item.setAttribute("value", texto)
          item.setAttribute('class', 'items')
          item.setAttribute("color", "#000000")
          item.setAttribute("id", "RTX2070")
          item.setAttribute("width",0.9)
          item.object3D.position.set(-0.3, -3, 1.4)
          var items=document.getElementById("items")
          items.appendChild(item)
          var btn = document.createElement("a-entity")
          btn.setAttribute("gltf-model","./modelos/menoslista.glb")
          btn.setAttribute("class", "eliminar")
          btn.setAttribute("quitar17", "")
          btn.object3D.position.set(0.5,-3,1.4 ) //0.35
          items.appendChild(btn)
        }else{
          componente.setAttribute("value", texto)
        }
        })
      }
      })
      
      AFRAME.registerComponent('quitar17', {
      init: function () {
        this.el.addEventListener('click', () => {
          var items=document.getElementById("items") 
          var item=document.getElementById("RTX2070")
          items.removeChild(item)
          items.removeChild(this.el)
          var items = document.getElementsByClassName("items")
            var precio=0
            for(var i=0; i<items.length; i++){
              precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
            }
            var total=document.getElementById("total")
              total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
        })
      }
      })


      AFRAME.registerComponent('enviar', {
        init: function () {
          this.el.addEventListener('click',() => {
            var message = `Muy buenas quisiera adquirir el siguiente producto`;
            message += `%0a%0a*Articulo:* Asus Zenbook`;
            message += `%0a%0a*Unidad:* 1`;
            message += `%0a%0a*Precio:* 1200`;
            window.open(`https://api.whatsapp.com/send?phone=${60797901}&text=${message}`, '_system');
          })
        }
      })


  //----------------------------------------------
     //Primer articulo I
     AFRAME.registerComponent('aumento18', {
      init: function () {
          this.el.addEventListener('click', () => {
            var cont = parseInt(document.getElementById('GC18').getAttribute("value"))+1
            document.getElementById('GC18').setAttribute('value', cont)
          })
      }
  })
  
  AFRAME.registerComponent('disminucion18', {
    init: function () {
        this.el.addEventListener('click', () => {
          var cont =parseInt(document.getElementById('GC18').getAttribute("value"))
          if(cont != 0){
            cont = parseInt(document.getElementById('GC18').getAttribute("value"))-1
          }
          document.getElementById('GC18').setAttribute('value', cont)
        })
    }
  })
  
  AFRAME.registerComponent('aniadir18', {
    init: function () {
        this.el.addEventListener('click', () => {
          var cont =parseInt(document.getElementById('GC19').getAttribute("value"))
          var texto= "lenovo S540\t"+cont+"\t12000Bs\t"+cont*12000+" bs"
        console.log(texto);
        var componente=document.getElementById("lenovoS540")
        if(componente == null){
          var item = document.createElement('a-text')
          item.setAttribute("value", texto)
          item.setAttribute('class', 'items')
          item.setAttribute("color", "#000000")
          item.setAttribute("id", "lenovoS540")
          item.setAttribute("width",0.9)
          item.object3D.position.set(-0.3, -3, 1.4)
          var items=document.getElementById("items")
          items.appendChild(item)
          var btn = document.createElement("a-entity")
          btn.setAttribute("gltf-model","./modelos/menoslista.glb")
          btn.setAttribute("class", "eliminar")
          btn.setAttribute("quitar18", "")
          btn.object3D.position.set(0.5,-3,1.4 ) //0.35
          items.appendChild(btn)
        }else{
          componente.setAttribute("value", texto)
        }
        })
    }
  })
  
  AFRAME.registerComponent('quitar18', {
    init: function () {
        this.el.addEventListener('click', () => {
          var items=document.getElementById("items") 
          var item=document.getElementById("lenovoS540")
          items.removeChild(item)
          items.removeChild(this.el)
          var items = document.getElementsByClassName("items")
          var precio=0
          for(var i=0; i<items.length; i++){
            precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
          }
          var total=document.getElementById("total")
            total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
        })
    }
  })
  
  // Segundo item
  
  AFRAME.registerComponent('aumento19', {
    init: function () {
        this.el.addEventListener('click', () => {
          var cont = parseInt(document.getElementById('GC19').getAttribute("value"))+1
          document.getElementById('GC19').setAttribute('value', cont)
        })
    }
  })
  
  AFRAME.registerComponent('disminucion19', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont =parseInt(document.getElementById('GC19').getAttribute("value"))
        if(cont != 0){
          cont = parseInt(document.getElementById('GC19').getAttribute("value"))-1
        }
        document.getElementById('GC19').setAttribute('value', cont)
      })
  }
  })
  
  AFRAME.registerComponent('aniadir19', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont =parseInt(document.getElementById('GC19').getAttribute("value"))
        var texto= "Lenovo IDEA\t"+cont+"\t10650Bs\t"+cont*10650+" bs"
      console.log(texto);
      var componente=document.getElementById("LenovoIDEA")
      if(componente == null){
        var item = document.createElement('a-text')
        item.setAttribute("value", texto)
        item.setAttribute('class', 'items')
        item.setAttribute("color", "#000000")
        item.setAttribute("id", "LenovoIDEA")
        item.setAttribute("width",0.9)
        item.object3D.position.set(-0.3, -3, 1.4)
        var items=document.getElementById("items")
        items.appendChild(item)
        var btn = document.createElement("a-entity")
        btn.setAttribute("gltf-model","./modelos/menoslista.glb")
        btn.setAttribute("class", "eliminar")
        btn.setAttribute("quitar19", "")
        btn.object3D.position.set(0.5,-3,1.4 ) //0.35
        items.appendChild(btn)
      }else{
        componente.setAttribute("value", texto)
      }
      })
  }
  })
  
  AFRAME.registerComponent('quitar19', {
  init: function () {
      this.el.addEventListener('click', () => {
        var items=document.getElementById("items") 
        var item=document.getElementById("LenovoIDEA")
        items.removeChild(item)
        items.removeChild(this.el)
        var items = document.getElementsByClassName("items")
          var precio=0
          for(var i=0; i<items.length; i++){
            precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
          }
          var total=document.getElementById("total")
            total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
      })
  }
  })
  
  //Tercer item
  
  AFRAME.registerComponent('aumento20', {
    init: function () {
        this.el.addEventListener('click', () => {
          var cont = parseInt(document.getElementById('GC20').getAttribute("value"))+1
          document.getElementById('GC20').setAttribute('value', cont)
        })
    }
  })
  
  AFRAME.registerComponent('disminucion20', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont =parseInt(document.getElementById('GC20').getAttribute("value"))
        if(cont != 0){
          cont = parseInt(document.getElementById('GC20').getAttribute("value"))-1
        }
        document.getElementById('GC20').setAttribute('value', cont)
      })
  }
  })
  
  AFRAME.registerComponent('aniadir20', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont =parseInt(document.getElementById('GC20').getAttribute("value"))
        var texto= "Lenovo YOGA\t"+cont+"\t13050Bs\t"+cont*13050+" bs"
      console.log(texto);
      var componente=document.getElementById("LenovoYOGA")
      if(componente == null){
        var item = document.createElement('a-text')
        item.setAttribute("value", texto)
        item.setAttribute('class', 'items')
        item.setAttribute("color", "#000000")
        item.setAttribute("id", "LenovoYOGA")
        item.setAttribute("width",0.9)
        item.object3D.position.set(-0.3, -3, 1.4)
        var items=document.getElementById("items")
        items.appendChild(item)
        var btn = document.createElement("a-entity")
        btn.setAttribute("gltf-model","./modelos/menoslista.glb")
        btn.setAttribute("class", "eliminar")
        btn.setAttribute("quitar20", "")
        btn.object3D.position.set(0.5,-3,1.4 ) //0.35
        items.appendChild(btn)
      }else{
        componente.setAttribute("value", texto)
      }
      })
  }
  })
  
  AFRAME.registerComponent('quitar20', {
  init: function () {
      this.el.addEventListener('click', () => {
        var items=document.getElementById("items") 
        var item=document.getElementById("LenovoYOGA")
        items.removeChild(item)
        items.removeChild(this.el)
        var items = document.getElementsByClassName("items")
          var precio=0
          for(var i=0; i<items.length; i++){
            precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
          }
          var total=document.getElementById("total")
            total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
      })
  }
  })
  
  
   //cuarto articulo
   AFRAME.registerComponent('aumento21', {
    init: function () {
        this.el.addEventListener('click', () => {
          var cont = parseInt(document.getElementById('GC21').getAttribute("value"))+1
          document.getElementById('GC21').setAttribute('value', cont)
        })
    }
  })
  
  AFRAME.registerComponent('disminucion21', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont =parseInt(document.getElementById('GC21').getAttribute("value"))
        if(cont != 0){
          cont = parseInt(document.getElementById('GC21').getAttribute("value"))-1
        }
        document.getElementById('GC21').setAttribute('value', cont)
      })
  }
  })
  
  AFRAME.registerComponent('aniadir21', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont =parseInt(document.getElementById('GC21').getAttribute("value"))
        var texto= "HP Pavilion\t"+cont+"\t8600Bs\t"+cont*8600+" bs"
      console.log(texto);
      var componente=document.getElementById("HPPavilion")
      if(componente == null){
        var item = document.createElement('a-text')
        item.setAttribute("value", texto)
        item.setAttribute('class', 'items')
        item.setAttribute("color", "#000000")
        item.setAttribute("id", "HPPavilion")
        item.setAttribute("width",0.9)
        item.object3D.position.set(-0.3, -3, 1.4)
        var items=document.getElementById("items")
        items.appendChild(item)
        var btn = document.createElement("a-entity")
        btn.setAttribute("gltf-model","./modelos/menoslista.glb")
        btn.setAttribute("class", "eliminar")
        btn.setAttribute("quitar21", "")
        btn.object3D.position.set(0.5,-3,1.4 ) //0.35
        items.appendChild(btn)
      }else{
        componente.setAttribute("value", texto)
      }
      })
  }
  })
  
  AFRAME.registerComponent('quitar21', {
  init: function () {
      this.el.addEventListener('click', () => {
        var items=document.getElementById("items") 
        var item=document.getElementById("HPPavilion")
        items.removeChild(item)
        items.removeChild(this.el)
        var items = document.getElementsByClassName("items")
        var precio=0
        for(var i=0; i<items.length; i++){
          precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
        }
        var total=document.getElementById("total")
          total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
      })
  }
  })
  
  // Quinto item
  
  AFRAME.registerComponent('aumento22', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont = parseInt(document.getElementById('GC22').getAttribute("value"))+1
        document.getElementById('GC22').setAttribute('value', cont)
      })
  }
  })
  
  AFRAME.registerComponent('disminucion22', {
  init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC22').getAttribute("value"))
      if(cont != 0){
        cont = parseInt(document.getElementById('GC22').getAttribute("value"))-1
      }
      document.getElementById('GC22').setAttribute('value', cont)
    })
  }
  })
  
  AFRAME.registerComponent('aniadir22', {
  init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC22').getAttribute("value"))
      var texto= "Acer Aspire 3\t"+cont+"\t12300Bs\t"+cont*12300+" bs"
    console.log(texto);
    var componente=document.getElementById("AcerAspire3")
    if(componente == null){
      var item = document.createElement('a-text')
      item.setAttribute("value", texto)
      item.setAttribute('class', 'items')
      item.setAttribute("color", "#000000")
      item.setAttribute("id", "AcerAspire3")
      item.setAttribute("width",0.9)
      item.object3D.position.set(-0.3, -3, 1.4)
      var items=document.getElementById("items")
      items.appendChild(item)
      var btn = document.createElement("a-entity")
      btn.setAttribute("gltf-model","./modelos/menoslista.glb")
      btn.setAttribute("class", "eliminar")
      btn.setAttribute("quitar22", "")
      btn.object3D.position.set(0.5,-3,1.4 ) //0.35
      items.appendChild(btn)
    }else{
      componente.setAttribute("value", texto)
    }
    })
  }
  })
  
  AFRAME.registerComponent('quitar22', {
  init: function () {
    this.el.addEventListener('click', () => {
      var items=document.getElementById("items") 
      var item=document.getElementById("AcerAspire3")
      items.removeChild(item)
      items.removeChild(this.el)
      var items = document.getElementsByClassName("items")
        var precio=0
        for(var i=0; i<items.length; i++){
          precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
        }
        var total=document.getElementById("total")
          total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
    })
  }
  })
  
  //Sexto item
  
  AFRAME.registerComponent('aumento23', {
  init: function () {
      this.el.addEventListener('click', () => {
        var cont = parseInt(document.getElementById('GC23').getAttribute("value"))+1
        document.getElementById('GC23').setAttribute('value', cont)
      })
  }
  })
  
  AFRAME.registerComponent('disminucion23', {
  init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC23').getAttribute("value"))
      if(cont != 0){
        cont = parseInt(document.getElementById('GC23').getAttribute("value"))-1
      }
      document.getElementById('GC23').setAttribute('value', cont)
    })
  }
  })
  
  AFRAME.registerComponent('aniadir23', {
  init: function () {
    this.el.addEventListener('click', () => {
      var cont =parseInt(document.getElementById('GC23').getAttribute("value"))
      var texto= "MSI GF63 THIN\t"+cont+"\t9680Bs\t"+cont*9680+" bs"
    console.log(texto);
    var componente=document.getElementById("MSIGF63THIN")
    if(componente == null){
      var item = document.createElement('a-text')
      item.setAttribute("value", texto)
      item.setAttribute('class', 'items')
      item.setAttribute("color", "#000000")
      item.setAttribute("id", "MSIGF63THIN")
      item.setAttribute("width",0.9)
      item.object3D.position.set(-0.3, -3, 1.4)
      var items=document.getElementById("items")
      items.appendChild(item)
      var btn = document.createElement("a-entity")
      btn.setAttribute("gltf-model","./modelos/menoslista.glb")
      btn.setAttribute("class", "eliminar")
      btn.setAttribute("quitar23", "")
      btn.object3D.position.set(0.5,-3,1.4 ) //0.35
      items.appendChild(btn)
    }else{
      componente.setAttribute("value", texto)
    }
    })
  }
  })
  
  AFRAME.registerComponent('quitar23', {
  init: function () {
    this.el.addEventListener('click', () => {
      var items=document.getElementById("items") 
      var item=document.getElementById("MSIGF63THIN")
      items.removeChild(item)
      items.removeChild(this.el)
      var items = document.getElementsByClassName("items")
        var precio=0
        for(var i=0; i<items.length; i++){
          precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
        }
        var total=document.getElementById("total")
          total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
    })
  }
  })
  
  
  // septimo item
  
  AFRAME.registerComponent('aumento24', {
    init: function () {
        this.el.addEventListener('click', () => {
          var cont = parseInt(document.getElementById('GC24').getAttribute("value"))+1
          document.getElementById('GC24').setAttribute('value', cont)
        })
    }
    })
    
    AFRAME.registerComponent('disminucion24', {
    init: function () {
      this.el.addEventListener('click', () => {
        var cont =parseInt(document.getElementById('GC24').getAttribute("value"))
        if(cont != 0){
          cont = parseInt(document.getElementById('GC24').getAttribute("value"))-1
        }
        document.getElementById('GC24').setAttribute('value', cont)
      })
    }
    })
    
    AFRAME.registerComponent('aniadir24', {
    init: function () {
      this.el.addEventListener('click', () => {
        var cont =parseInt(document.getElementById('GC24').getAttribute("value"))
        var texto= "Surface Pro 7\t"+cont+"\t10900Bs\t"+cont*10900+" bs"
      console.log(texto);
      var componente=document.getElementById("SurfacePro7")
      if(componente == null){
        var item = document.createElement('a-text')
        item.setAttribute("value", texto)
        item.setAttribute('class', 'items')
        item.setAttribute("color", "#000000")
        item.setAttribute("id", "SurfacePro7")
        item.setAttribute("width",0.9)
        item.object3D.position.set(-0.3, -3, 1.4)
        var items=document.getElementById("items")
        items.appendChild(item)
        var btn = document.createElement("a-entity")
        btn.setAttribute("gltf-model","./modelos/menoslista.glb")
        btn.setAttribute("class", "eliminar")
        btn.setAttribute("quitar24", "")
        btn.object3D.position.set(0.5,-3,1.4 ) //0.35
        items.appendChild(btn)
      }else{
        componente.setAttribute("value", texto)
      }
      })
    }
    })
    
    AFRAME.registerComponent('quitar24', {
    init: function () {
      this.el.addEventListener('click', () => {
        var items=document.getElementById("items") 
        var item=document.getElementById("SurfacePro7")
        items.removeChild(item)
        items.removeChild(this.el)
        var items = document.getElementsByClassName("items")
          var precio=0
          for(var i=0; i<items.length; i++){
            precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
          }
          var total=document.getElementById("total")
            total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
      })
    }
    })
    
    //Sexto item
    
    AFRAME.registerComponent('aumento25', {
    init: function () {
        this.el.addEventListener('click', () => {
          var cont = parseInt(document.getElementById('GC25').getAttribute("value"))+1
          document.getElementById('GC25').setAttribute('value', cont)
        })
    }
    })
    
    AFRAME.registerComponent('disminucion25', {
    init: function () {
      this.el.addEventListener('click', () => {
        var cont =parseInt(document.getElementById('GC25').getAttribute("value"))
        if(cont != 0){
          cont = parseInt(document.getElementById('GC25').getAttribute("value"))-1
        }
        document.getElementById('GC25').setAttribute('value', cont)
      })
    }
    })
    
    AFRAME.registerComponent('aniadir25', {
    init: function () {
      this.el.addEventListener('click', () => {
        var cont =parseInt(document.getElementById('GC25').getAttribute("value"))
        var texto= "Toshiba Porterge\t"+cont+"\t11620Bs\t"+cont*11620+" bs"
      console.log(texto);
      var componente=document.getElementById("ToshibaPorterge")
      if(componente == null){
        var item = document.createElement('a-text')
        item.setAttribute("value", texto)
        item.setAttribute('class', 'items')
        item.setAttribute("color", "#000000")
        item.setAttribute("id", "ToshibaPorterge")
        item.setAttribute("width",0.9)
        item.object3D.position.set(-0.3, -3, 1.4)
        var items=document.getElementById("items")
        items.appendChild(item)
        var btn = document.createElement("a-entity")
        btn.setAttribute("gltf-model","./modelos/menoslista.glb")
        btn.setAttribute("class", "eliminar")
        btn.setAttribute("quitar25", "")
        btn.object3D.position.set(0.5,-3,1.4 ) //0.35
        items.appendChild(btn)
      }else{
        componente.setAttribute("value", texto)
      }
      })
    }
    })
    
    AFRAME.registerComponent('quitar25', {
    init: function () {
      this.el.addEventListener('click', () => {
        var items=document.getElementById("items") 
        var item=document.getElementById("ToshibaPorterge")
        items.removeChild(item)
        items.removeChild(this.el)
        var items = document.getElementsByClassName("items")
          var precio=0
          for(var i=0; i<items.length; i++){
            precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
          }
          var total=document.getElementById("total")
            total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
      })
    }
    })
  
      //Septo item
    
      AFRAME.registerComponent('aumento26', {
        init: function () {
            this.el.addEventListener('click', () => {
              var cont = parseInt(document.getElementById('GC26').getAttribute("value"))+1
              document.getElementById('GC26').setAttribute('value', cont)
            })
        }
        })
        
        AFRAME.registerComponent('disminucion26', {
        init: function () {
          this.el.addEventListener('click', () => {
            var cont =parseInt(document.getElementById('GC26').getAttribute("value"))
            if(cont != 0){
              cont = parseInt(document.getElementById('GC26').getAttribute("value"))-1
            }
            document.getElementById('GC26').setAttribute('value', cont)
          })
        }
        })
        
        AFRAME.registerComponent('aniadir26', {
        init: function () {
          this.el.addEventListener('click', () => {
            var cont =parseInt(document.getElementById('GC26').getAttribute("value"))
            var texto= "Matebook X Pro\t"+cont+"\t14500Bs\t"+cont*14500+" bs"
          console.log(texto);
          var componente=document.getElementById("MatebookXPro")
          if(componente == null){
            var item = document.createElement('a-text')
            item.setAttribute("value", texto)
            item.setAttribute('class', 'items')
            item.setAttribute("color", "#000000")
            item.setAttribute("id", "MatebookXPro")
            item.setAttribute("width",0.9)
            item.object3D.position.set(-0.3, -3, 1.4)
            var items=document.getElementById("items")
            items.appendChild(item)
            var btn = document.createElement("a-entity")
            btn.setAttribute("gltf-model","./modelos/menoslista.glb")
            btn.setAttribute("class", "eliminar")
            btn.setAttribute("quitar26", "")
            btn.object3D.position.set(0.5,-3,1.4 ) //0.35
            items.appendChild(btn)
          }else{
            componente.setAttribute("value", texto)
          }
          })
        }
        })
        
        AFRAME.registerComponent('quitar26', {
        init: function () {
          this.el.addEventListener('click', () => {
            var items=document.getElementById("items") 
            var item=document.getElementById("MatebookXPro")
            items.removeChild(item)
            items.removeChild(this.el)
            var items = document.getElementsByClassName("items")
              var precio=0
              for(var i=0; i<items.length; i++){
                precio+=parseInt(items[i].getAttribute("value").split("\t")[3].split(" ")[0])
              }
              var total=document.getElementById("total")
                total.setAttribute('value', "Total:\t\t\t\t\t\t"+precio+" Bs")
          })
        }
        })
  