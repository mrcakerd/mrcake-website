export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Serve files from the public directory
    try {
      const response = await fetch(url.toString().replace('mrcake.lat', 'mrcake.pages.dev'));
      return response;
    } catch (error) {
      return new Response('File not found', { status: 404 });
    }
  }
};
