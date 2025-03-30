#!/bin/bash
set -v

buf generate proto

pushd docframepb
go generate .
popd
