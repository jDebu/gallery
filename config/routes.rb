Rails.application.routes.draw do
  scope '/gallery' do
    root "photos#index"
  end
end
