#  This script should do all the preparation for your project to run, such as downloading any dependencies and compiling if necessary
echo "Installing dependencies..."
npm install
wait
echo "Install complete!"
echo "Transpiling..."
babel ./server -d ./server-dist --presets es2015,stage-2 --copy-files
wait
echo "Transpiling complete!"