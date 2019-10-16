<template>
    <div>
        <my-header></my-header>
        <div class="bg-white" id="con">
		<div class="container">
			<div class="row ">
				<div class="col-lg-12 mt-3">
					<h2 class="text-center mt-5">Contact Us</h2>
					<hr class="line01 d-block">
					<div class="text-center ">Dogs are human friends.</div>
				</div>
			</div>
			<div class="section">
				<div class="row">
					<div class="col-md-8 offset-md-2">
						<div class="form-group">
							<div class="row">
								<div class="col-lg-6 col-md-12 form-group">
									<input type="text" class="form-control" placeholder="Enter name">
								</div>
								<div class="col-lg-6 col-md-12 form-group">
									<input type="text" class="form-control" placeholder="Enter email">
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Subject">
									</div>
									<div class="form-group">
										<textarea name="Message" class="form-control" id="Message" cols="20"
											rows="4">Message</textarea>
									</div>
									<button type="submit"
										class="btn btn-block btn-lg text-white font-weight-bold btn_1 my-3">Send
										Message</button>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4"></div>
				</div>
			</div>
		</div>
	</div>
    <my-footer></my-footer>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>