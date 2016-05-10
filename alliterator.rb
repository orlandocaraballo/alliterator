require "sinatra"
require "yaml"

ANNIVERSARY_PATH = "/anniversary"

get "/" do
  erb :index
end

get "#{ANNIVERSARY_PATH}" do
  @passages = YAML::load_file("passages.yml")
  erb :anniversary
end

helpers do
  def choose_icon(passage)
    passage == @passages.last ? "fa-angle-up" : "fa-angle-down"
  end
end