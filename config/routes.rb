Rails.application.routes.draw do
  get 'tweets/index'

    scope '/api' do
        resources :tweets, except: [:new, :edit]
    end
end
