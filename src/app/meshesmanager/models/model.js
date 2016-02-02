/**
* @class   AppMeshesmanagerModel
* @extends GuiPanelModel
*/
var AppMeshesmanagerModel = GuiPanelModel.extend(
{
    /**
    * Panel target id.
    *
    * @protected
    * @property target
    * @type     {String}
    * @default  'columnOne'
    */
    target: 'columnOne',

    /**
    * Panel position index.
    *
    * @protected
    * @property index
    * @type     {Integer}
    * @default  1
    */
    index: 1,

    /**
    * Model setup.
    *
    * Called by GuiModule, immediately after Module create().
    *
    * @method setup
    * @return {Mixed}
    */
    setup: function() {
        // self alias
        var self = this;

        // panel color and icon
        self.color('red');
        self.icon('diamond');

        // meshes list
        self.meshes = ko.observableArray();
    }
});
