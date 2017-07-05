/*
YUI().use(
  'aui-carousel',
  function(Y) {
    new Y.Carousel({
      intervalTime: 10,
      contentBox: '#demo',
      activeIndex: 0,
      height: 254,
      pauseOnHover: true,
      width: 940
    }).render();
  }
);
*/

/*Agrupadores - Pestañas
YUI().use(
  'aui-tabview',
  function(Y) {
    new Y.TabView({
      srcNode: '#myTab'
    }).render();
  }
);

/*Agrupadores - Colapsables
YUI().use(
  'aui-toggler',
  function(Y) {
  new Y.TogglerDelegate(
    {
    animated: true,
    closeAllOnExpand: true,
    container: '#myToggler',
    content: '.content',
    header: '.header',
    transition: {
    duration: .3,
    easing: 'cubic-bezier'
    }
    }
  );
  }
);

/*Grupo de Datos - Modal
YUI().use(
  'aui-modal',
  function(Y) {
  var modal = new Y.Modal(
    {
    contentBox:'.modal-content',
    modal: true,
    boundingBox: '#modal',
    width: 600,
    draggable: false,
    resizable: false,
    visible: false,
    centered: true,
    }
  ).render();
  Y.one('#showModal').on(
    'click',
    function() {
    modal.show();
    }
  );
  Y.one('.hideModal').on(
    'click',
    function() {
    modal.hide();
    }
  );
  }
);





/*
YUI().use(
  'aui-ace-editor',
  function(Y) {
    var editor = new Y.AceEditor(
      {
        boundingBox: '#myEditor',
        height: '200',
        mode: 'javascript',
        value: 'alert("Write something here...");',
        width: '100%'
      }
    ).render();

    var mode = Y.one('#mode');

    if (mode) {
      var contents = {
        javascript: 'alert("Write something here...");',
        json: '{"value": "Write something here..."}',
        php: '<?php echo "Write something here..."; ?>',
        xml: '<value attr="something">Write something here...</value>'
      };

      var currentMode = 'javascript';

      var updateValue = function() {
        editor.set('value', contents[currentMode]);
      };

      mode.on(
        'change',
        function(event) {
          currentMode = this.val();
          editor.set('mode', currentMode);
          updateValue();
        }
      );
    }
  }
);

YUI().use(
  'aui-tooltip',
  function(Y) {
    new Y.Tooltip(
      {
        trigger: '#myTooltip',
        position: 'left'
      }
    ).render();
  }
);
*/