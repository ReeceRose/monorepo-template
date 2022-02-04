all:
	./build.sh

lint:
	go fmt $(go list ./... | grep -v /vendor/)

test:
	# go generate ./..
	go test $(go list ./... | grep -v /vendor/)