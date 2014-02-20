SearchBarView   = require '../../../../components/search_bar/view.coffee'
analytics       = require '../../../../lib/analytics.coffee'

module.exports =
  setupSearch: (profile, fair) ->
    @searchBarView ?= new SearchBarView
      el     : @$('#fair-search-container')
      $input : @$('#fair-search-input')
      fairId : @fair.id

    @searchBarView.on 'search:entered', (term) =>
      window.location = "#{@model.href()}/search?q=#{term}"

    @searchBarView.on 'search:selected', (e, model) ->
      return false unless model
      model.updateForFair fair
      analytics.track.click 'Selected item from fair search',
        label: analytics.modelNameAndIdToLabel model.get('display_model'), model.id
        query: @query
      @selected = true
      window.location = model.get 'location'
