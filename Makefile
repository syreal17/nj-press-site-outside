.PHONY: install serve build clean versions

install:
  bundle install

versions:
  bundle exec github-pages versions

serve:
  bundle exec jekyll serve

build:
  bundle exec jekyll build

clean:
  rm -rf _site .jekyll-cache .sass-cache
